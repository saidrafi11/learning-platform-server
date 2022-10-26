const express = require('express')
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./Data/Categoties.json');

const courses = require('./Data/Courses.json')

app.get('/', (req, res)=>{
res.send('learning api running')
});

app.listen(port, ()=>{
    console.log('server running')
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.get('/course-categories', (req, res)=>{
    res.send(categories)
});

app.get('/category/:id', (req, res)=>{
    const id = req.params.id;
    if(id === "07"){
        res.send(courses)
    }
    else{

        const course_category = course.filter( c => c.category_id === id);
        res.send(course_category)
    }
})

app.get('/course/:id', (req, res )=>{
    const id = req.params.id;
  
    const selectedCourse = courses.find(n => n._id === id);
    res.send(selectedCourse)
    })
    
app.get('/checkout/:id', (req, res )=>{
    const id = req.params.id;
  
    const selectedCourse = courses.find(n => n._id === id);
    res.send(selectedCourse)
    })