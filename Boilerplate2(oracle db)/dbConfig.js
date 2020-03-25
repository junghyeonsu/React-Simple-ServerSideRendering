module.exports = 
{
    user : process.env.NODE_ORACLEDB_USER || "hr",
    password : process.env.NODE_ORACLEDB_PASSWOR || "123456",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/orcl"
}