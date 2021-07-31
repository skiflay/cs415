const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'dreamhomeUser',
    password: 'test@123',
    database: 'dreamhomedb'
})

dbConnection.connect(err=>{
    if(err) throw Error;
    console.log('Connected!')
})

const qryBranch = `select * from dreamhomedb.branch group by branchNo`
dbConnection.query(qryBranch, (err, res)=>{
    if(err) throw err;
    // console.log(res)
    displyBranch(res);
})
const qryStaff = `select s.* from dreamhomedb.staff s
                    join dreamhomedb.branch b ON s.branchNo = b.branchNo
                    Where city = 'London'`
dbConnection.query(qryStaff, (err, res)=>{
    if(err) throw err;
     //console.log(res)
     displyStaff(res);
})

const displyBranch = res=>{
    for(let branch of res){
        console.log(`branchNo: ${branch.branchNo}, street: ${branch.street}, city: ${branch.city}, postcode: ${branch.postcode}`)
    }
}
const displyStaff = res=>{
    for(let staff of res){
        console.log(`staffNo: ${staff.staffNo}, FirstName: ${staff.fname}, LastName: ${staff.lname}, position: ${staff.position}
                    Sex: ${staff.sex}, Sex: ${staff.sex}, DOB: ${staff.salary}`)
    }
}
dbConnection.end();