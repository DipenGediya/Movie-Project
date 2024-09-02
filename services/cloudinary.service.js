const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "dqjbpkwx4",
  api_key: "347242736692419",
  api_secret: "IXxS4HocbOmcgukJ9tbcdzHNDDY",
});

let uploadImage = (path, originalname) => {
  return cloudinary.uploader.upload(
    path,
    { public_id: `${originalname}` },
    function (error, result) {
      return result;
    }
  );
};

module.exports = uploadImage;