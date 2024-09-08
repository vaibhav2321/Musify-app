const dbConnect = require('../../lib/dbConnection')

export default async function handler(req, res){
    try {
        await dbConnect();
        res.status(200).json({message:'Hello! API',
            data:[
                {
                    id:1,
                    name: 'Ashwani Verma',
                    age: 48,
                    profile: "Marketing Person"
                },
                {
                    id:2,
                    name: 'Daya Verma',
                    age: 46,
                    profile: "MRD Incharge"
                },
                {
                    id:3,
                    name: 'Rajat Verma',
                    age: 23,
                    profile: "Indian Navy Sailor"
                },
                {
                    id:4,
                    name: 'Vaibhav Verma',
                    age: 22,
                    profile: "SDE3"
                },
                {
                    id:5,
                    name: 'Vanshika Verma',
                    age: 15,
                    profile: "Student"
                },
                {
                    id:6,
                    name: 'Stuffy Verma',
                    age: 6,
                    profile: "Pet"
                },
            ]
        })
    } catch (error) {
        res.status(500).json({error : "Failed to connect to DataBase!"})
    }
}