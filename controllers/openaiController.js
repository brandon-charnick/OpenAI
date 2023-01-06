const dotenv = require("dotenv").config();
const {Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const createImage = async (req, res) => {
  try {
    const response = await openai.createImage({
      prompt: "A red haired man with beard and a crowbar in a photorealistic style.",
      n: 1,
      size: '1024x1024',
    });

    const imageUrl = response.data.data[0].url;
    console.log(imageUrl);
    res.status(200).json({
      success: true,
      data: imageUrl
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: 'Image could not be created'
    });

    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }
};

module.exports = { createImage };
