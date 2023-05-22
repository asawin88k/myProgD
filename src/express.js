const reqt = require("./router/apiroute");
const users = require('./model/users');
const express = require("express"); // เสมือน import package มาใช้งาน
const app = express(); // สร้าง Express Application ลองกด ctrl + คลิกเข้าไปดูในไส้ใน
const bodyParser = require('body-parser')
// var knex = require('./config/connect_db/connect_ora_client');

// path สมมติที่เราตั้งขึ้นมาเองซึ่งไม่ได้เป็น path จริงๆตามโครงสร้าง folder แต่มันคือ path
// ที่เราใช้เรียกบน url เว็บไซต์นั่นเอง
const sessions = require('express-session');
const cookieParser = require("cookie-parser");
const oneDay = 1000 * 60 * 60 * 24;

app.use(cookieParser());
app.use(express.static(__dirname));

const myusername = 'kokdev'
const mypassword = 'pass'

app.use(sessions({
    secret: "secrctekeykokdev",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parse application/json

app.use(express.json())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

// a variable to save a session
var session;

app.get('/', (req, res) => {
    session = req.session;
    if (session.userid) {
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    } else
        res.sendFile('views/index.html', { root: __dirname })
});

app.post('/user', (req, res) => {
  if (req.body.username == myusername && req.body.password == mypassword) {
      session = req.session;
      session.userid = req.body.username;
      console.log(req.session)
      res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
  } else {
      res.send('Invalid username or password');
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

//parameter req คือ header ของ client ที่ส่งเข้ามา ซึ่งอาจจะดู cookies, session ที่เข้ามาก็ได้
//parameter res คือ สิ่งที่ server Node เราจะตอบสนองข้อมูลกลับไปนั่นเอง
/* app.get("/", (req, res) => {
// server จะสามารถส่งทั้ง header ต่างๆหรือจะตัวหนังสือ json อะไรก็ได้กลับไป
  res.send("send to out");
  console.log('send out');
});
*/


app.use("/api",  reqt);

app.get('/node', function (req, res) {
  res.send('<h1>Node.js</h1>')
})

app.get('/user', function (req, res) {
  res.json(users.findAll())
})

app.get('/user/:id', function (req, res) {
  var id = req.params.id
  res.json(users.findById(id))
})

app.post('/newuser', function (req, res) {
  var json = req.body
  res.send('Add new ' + json.name + ' Completed!')
})

// server จะรันที่ port 3000 หรือ port ใดๆก็ตามใจเราและ callback จะทำงานเมื่อ
app.listen(3000, () => {
    console.log('Server Listen At 3000')
});