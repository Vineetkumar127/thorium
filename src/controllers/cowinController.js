let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
//Assignment Question 1(vaccination sesssins by District Id)
//WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id 
//and for any given date


let getDistrictSession = async function (req,res){
    try {
       
        let district = req.query.districtId
        let date =req.query.date
        let options ={
            method:"get",
            url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`

        }
        let result =await axios(options)
        console.log(result.data)
        res.status(200).send({msg: result.data})

    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



//Assignment Q2.(Sorted cities as per temp)

let getSortedCities =async function (req,res){
    try {
        let cities =["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray=[ ]
        //better to sue for.. of hear
        for (i=0;i<cities.length; i++){
        let obj = {city:cities[i] } //{city:"Bengaluru"}
        let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=6c24266614de0aca21c70c82e3c56621`)
        console.log(resp.data.main.temp)

        obj.temp=resp.data.main.temp   //{city:"Bengaluru",tepm:301.2}
        cityObjArray.push(obj)

        }
        //cityObjArray =[{city:"Bengaluru",tepm:301.2},{city:"Mumbai",tepm:304.2},{city:"Delhi",tepm:320.2}.......}]
        // myarray.sort((a,b)=>a.age-b.age);
        let sorted = cityObjArray.sort(function(a,b){return a.temp -b.temp })

        //can pass cityObjArray also heare as sort method dose sorting on the same array (in place) and original array is replaced by the 
         //sorted one
         console.log(sorted)
         res.status(200).send({status: true,data:sorted})
    
    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status:false,msg:"server error" })

    }
}


//Assignment Q3.(Meme Creation) 

const memeHandler = async function(req,res){
    try{
        let memeId =req.query.memeId
        let text0=req.query.text0
        let text1=req.query.text1
        let username = req.query.username
        let pass =req.query.pass

        
        let options = {
            method : "post",
            url:`https://api.imgflip.com/caption_image?template_id=${memeId}&text0=${text0}&text1=${text1}&username=${username}&password=${pass}`
            
        }
        let result= await axios(options)
        res.send({data:result.data })

    }
    catch (error) {
        console.log(error)
        res.status(500).send({ status:false,msg:"server error" })

    }

}





module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictSession =getDistrictSession
module.exports.getSortedCities = getSortedCities
module.exports.memeHandler = memeHandler