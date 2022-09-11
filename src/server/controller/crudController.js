let data = [{
    "id": 1,
    "name": "Article 1",
    "title": "This is test article made to demonstrate blog website using html and js only",
    "html": "Some test articles are theoretically able to be modified and upgraded to flight-ready status. Of the 136 Space Shuttle external fuel tanks produced, one was retained as a test article. The contractor producing the tanks stated that that tank could be refurbished for flight use if necessary.[1]    Test articles are often displayed in museums because of their accuracy.[2] Museums may refurbish test articles to match more modern configurations. This was completed on the Hubble Space Telescope Structural Dynamic Test Vehicle on display at the National Air and Space Museum where this 1976 version of the vehicle was removed from display and upgraded in 1996 by the Smithsonian, Lockheed, and NASA to incorporate changes made on the on-mission version of the Hubble Space Telescope over several servicing missions.[3]"
  },
  {
    "id": 2,
    "name": "Article 2",
    "title": "This is test article made to demonstrate blog website using html and js only",
    "html": "Some test articles are theoretically able to be modified and upgraded to flight-ready status."
  },
  {
    "id": 3,
    "name": "Article 3",
    "title": "This is test article made to demonstrate blog website using html and js only",
    "html": "Some test articles are theoretically abl"
  },
  {
    "id": 4,
    "name": "Article 4",
    "title": "This is test article made to demonstrate blog website using html and js only",
    "html": "S upgraded to flight-ready status."
  },
  {
    "id": 5,
    "name": "Article 5",
    "title": "This is test article made to demonstrate blog website using html and js only",
    "html": "upgraded to flight-ready status."
  },
  {
    "id": 6,
    "name": "Article 6",
    "title": "This is test article made to demonstrate blog website using html and js only",
    "html": "Some test articles are theoretically able to be modified and upgraded to flight-ready status."
  }
]

exports.getArticles = (req, res) => {
  return res.status(200).json(data);
};
exports.addArticle = (req, res) => {
  data.push(req.body)
  return res.status(200).json({
    "completed": true
  });
};
exports.editArticle = (req, res) => {
  let foundAt = data.findIndex(el => el.id == req.body.id);

  if (foundAt == -1) {
    return res.status(200).json({
      "updated": false,
      "msg": "Not found"
    });
  } else {
    data[foundAt] = req.body;
    return res.status(200).json({
      "deleted": true
    });
  }
};
exports.deleteArticle = (req, res) => {
  let foundAt = data.findIndex(el => el.id == req.body.id);
  if (foundAt == -1) {
    return res.status(200).json({
      "deleted": false,
      "msg": "Not found"
    });
  } else {
    data.splice(foundAt, 1);
    return res.status(200).json({
      "deleted": true
    });
  }
};
exports.sendFeedback = (req,res) =>{
  let feedbackForm = req.body;
  if(feedbackForm){
    const DOMAIN = 'sandbox25c51c3bbb5045eaa11127561842227a.mailgun.org';
    const api_key = 'e884d80211e732447233c4028440caa8-07a637b8-958f6d13';
    const mg = mailgun({apiKey: api_key, domain: DOMAIN});
    const data = {
      from: 'Portfolio App <rishikeshjanrao@outlook.com>',
      to: 'janraorishikesh@gmail.com, janraor@sandbox25c51c3bbb5045eaa11127561842227a.mailgun.org',
      subject: feedbackForm.name + " - Feedback",
      text: feedbackForm.msg+"\n"+feedbackForm.email+"\n"
    };
    mg.messages().send(data, function (error, body) {
      return res.status(200).json({
        "msg": "Sent email successfully !"
      });
    });
    
  }
}