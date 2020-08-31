require('dotenv').config()
const sql = require("../models/db.js");
const db = require("../models");
const sequelize = require('sequelize');
const UserModel = db.userModel;
const Op = require('sequelize').Op;
class UserController {

    static postuserdetails = async (req, res) => {
              
        const userDetails =await UserModel.build({  
            name: req.body.name,
            dateofbirth: req.body.dateofbirth,
            address: req.body.address,
            mobile_number: req.body.mobile_number,
            
         });
     await userDetails.save()
     if(!userDetails){
        return res.status(200).send({
            status: 404,
            message: 'No data found'   
        });
    }
    res.status(200).send({
        status: 200,
        message: 'Data Save Successfully' 
    });
} 
catch(error){
    console.log(error)
    return res.status(400).send({
        message:'Unable to insert data',
        errors: error,
        status: 400
    });
}
    static getuserdetails = async (req, res) => {
        const userDetails = await UserModel.findAll()
    if(!userDetails){
        return res.status(200).send({
            status: 404,
            message: 'No data found'   
        });
    }
    res.status(200).send({
        status: 200,
        message: 'Data find Successfully' 
    });
    } 
    catch(error){
    console.log(error)
    return res.status(400).send({
        message:'Unable to find data',
        errors: error,
        status: 400
    });
    }
    static updatedetails = async (req, res) => {
        
        const id=req.body.id;
        
        const userDetails =await UserModel.update({  
            name: req.body.name,
            dateofbirth: req.body.dateofbirth,
            address: req.body.address,
            mobile_number: req.body.mobile_number,
        },
            {where: {id: req.body.id} 
        });
     if(!userDetails){
        return res.status(200).send({
            status: 404,
            message: 'No data found'   
        });
    }
    res.status(200).send({
        status: 200,
        message: 'Data Update Successfully' 
    });
} 
catch(error){
    console.log(error)
    return res.status(400).send({
        message:'Unable to update data',
        errors: error,
        status: 400
    });
}
    static deletedetails = async (req, res) => {
        const id= req.body.id;
        const userDetails = await UserModel.destroy({
            where: { id: id }
        });
    if(!userDetails){
        return res.status(200).send({
            status: 404,
            message: 'No data found'   
        });
    }
    res.status(200).send({
        status: 200,
        message: 'Data Delete Successfully' 
    });
    } 
    catch(error){
    console.log(error)
    return res.status(400).send({
        message:'Unable to Delete data',
        errors: error,
        status: 400
    });
    }
}
module.exports = UserController