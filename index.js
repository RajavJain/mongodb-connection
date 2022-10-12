const mongoose = require("mongoose");// moongoose used to connect node to mongodb, it is a mongodb package

mongoose.connect("mongodb://localhost:27017/SampleWork").then(()=>{ //ye cmd line connect krega mongodb server se jo ki mongodb compass se start kiya hai...
    console.log("Connected to mongodb");
}).catch((err)=>{//if any error it will throw
    console.log(err);
})

const student= mongoose.Schema({ //ye ek type type ka blueprint bn jaaega, jiska naam student rakh diya hai
    name: String,
    class: String,
    roll_no : Number
})
 
const Student= mongoose.model("Student", student);//it's model or a collection where we can store data

//METHOD I :-
// const addData = async () =>{
//     const s= new Student({
//         name: "Babi bhaiya",
//         class: "Nineth",
//         roll_no: "01"
//     })
    
//     await s.save();
// }

// addData();

//METHOD II :-
const addData1 = async()=>{

    const s1 = await Student.create({//used create method, its a basically good approach
        name: "Babu bhaiya",
        class: "Tenth",
        roll_no: "09"
    })
}//Similarly we have find and other method to do CRUD operations in it.

// addData1();