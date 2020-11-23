var data = {
  "experience": {
    "title": "Education & Experience",
    "subtitle": "A brief timeline on my education and work experience",
    "content": [{
        "id": 0,
        "company": "Northwestern University",
        "job": "Master student",
        "date": "Sep 2019 - Present",
        "description": "Master student in Computer Science."
      }, {
      "id": 1,
      "company": "Amazon Web Service",
      "job": "SDE Intern",
      "date": "Jun 2020 - Sep 2020",
      "description": "• Designed and developed a canary testing for StrongBow - AWS’s BGP prefix hijack detector, that customizes and crafts BGP update files with various monitored prefixes and variable load.<br>• The canary simulates prefix hijack events and triggers StrongBow to see how it will behave under different circumstances so that it helps measure the accuracy and availability of StrongBow.<br>• The canary is built with AWS Lambda and deployed to production environment."
    }, {
      "id": 2,
      "company": "Morgan Stanley",
      "job": "Technology Summer Analyst",
      "date": "Jul 2018 - Oct 2018",
      "description": "• Developed the driver of Zookeeper, Kafka cluster test environment on the basis of Morgan’s test platform Testplan, and uploaded it to Morgan’s codebase. <br>• Changed the DataServer, which was for daily transaction data information transmission, from TCP to Kafka, and implemented a working demo prototype for performance testing to verify the the feasibility of the new approach."
    }]
  },
  "projects": {
    "title": "Projects",
    "subtitle": "Projects that I have been working on in school.",
    "content": [{
      "id": 0,
      "name": "Sentiment Analysis",
      "description": "Sentiment analysis based on Sina Weibo dataset, using machine learning algorithms to train the model. Algorithms include Naive Bayes and SVM.",
      "techniques": "Techniques used: Python, Machine Learning",
      "cover": "sentiment-analysis.png"
    }, {
      "id": 1,
      "name": "Distributed Commodities Trading System",
      "description": "A distributed commodities trading system that simulates large-scaled, real-time and secured commodities trading.",
      "techniques": "Techniques used: Java, SpringBoot, GoLang",
      "cover": "trading.jpg",
      "link": "detail.html"
    }]
  }
};

function createExperience(selector) {
  let timeline = document.querySelector(selector);
  let experiences = data['experience']['content'];

  if (timeline && experiences instanceof Array) {
    for (let item of experiences) {
      let html = 
        `<div class='timeline-content'>
          <h2>${item.company}</h2>
          <div class='timeline-content-info'>
            <span class='job'>${item.job}</span>
            <span class='date'>${item.date}</span>
          </div>
          <p>${item.description}</p>
         </div>`;
      
        let div = document.createElement("div");
        div.className = "timeline-block";
        div.innerHTML = html;
        div.tabIndex = experiences.indexOf(item);
        timeline.append(div);
    }
  }
};

function createProjects(selector) {
  let projectList = document.querySelector(selector);
  let projects = data['projects']['content'];

  if (projectList && projects instanceof Array) {
    for (let item of projects) {
      let html = 
      `<div class='content-img'>
        <img src='./assets/${item.cover}' alt='${item.name}'/>
       </div>
       <div class='content-text'>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>${item.techniques}</p>`;
      if (item.link) {
        html += 
        `<a class='button' href='${item.link}'>View Project</a>
        </div>`;
      }

      let div = document.createElement("div");
      div.className = "content";
      div.innerHTML = html;
      div.tabIndex = projects.indexOf(item);
      projectList.append(div);
    }
  }
};
