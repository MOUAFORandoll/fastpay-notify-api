var admin = require("firebase-admin");

var serviceAccount = require("../config/service-account.json");

// Initialize Firebase app
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.sendPushNotification = (req, res, next) => {
  try {
    if (!req.body || !req.body.token || !req.body.title) {
      return res.status(400).send({
        message: "Invalid request body",
      });
    }
    let message = {
      token: req.body.token,
      notification: {
        title: req.body.title,
        body: req.body.body,
      },
      data: req.body.data ?? {},
    };
    console.log(message);
    admin
      .messaging()
      .send(message)
      .then((response) => {
        return res.status(200).send({
          message: "Notification sent successfully",
        });
      })
      .catch((error) => {
        console.log(error);

        return res.status(500).send({
          message: error,
        });
      });
  } catch (error) {
    console.log(error);

    return res.status(500).send({
      message: error.message,
    });
  }
};
