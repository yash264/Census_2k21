function about()
{
    var doc=document.open("text.html","replace");
    var txt="<html><head><style>*{background-color: rgba(120, 180, 221, 0.208)}</style></head><body><br><h2>About the Scheme<h1><br><h4>A census is the procedure of systematically acquiring , recording and calculating population information about the members of a given population. This term is used mostly in connection with national population and housing censuses ; other common censuses include censuses of agriculture, traditional culture, business, supplies, and traffic censuses . The United Nations (UN) defines the essential features of population and housing censuses as individual enumeration, universality within a defined territory, simultaneity and defined periodicity , and recommends that population censuses be taken at least every ten years. UN recommendations also cover census topics to be collected, official definitions, classifications and other useful information to co-ordinate international practices .</h4></body></html>";
    doc.write(txt);
    doc.close();
}
function contact()
{
    var doc=document.open("text.html","replace");
    var txt="<html><head><style>*{background-color: rgba(115, 223, 121, 0.219)}</style></head><body><br><h3>Hi! Everyone I am Techkriti pursuing Bachelors of Technology in National Institute of Technology , Prayagraj . I have made this project to help the Government of India to conduct regular survey and make policies accordingly . This will help them in implementing different strategies to develop our country INDIA. </h3><br><h3>Email Id : techkriti@gmail.com</h3><br></body></html>";
    doc.write(txt);
    doc.close();
}
function mission()
{
    var doc=document.open("text.html","replace");
    var txt="<html><head><style>*{background-color: rgba(211, 168, 88, 0.137)}</style></head><body><br><h2>About the Mission<h2><br><h4>The Census Operations in India have been carried out in two phases: - i) Houselisting and Housing Census and ii) Population Enumeration. During Houselisting and Housing Census, all buildings, Census Houses and Households are identified and systematically listed in the relevant schedules. It provides comprehensive data on the conditions of human settlements, housing deficit and consequently the housing requirements to be taken care of in the formulation of housing policies. This will also provide a wide range of data/information on amenities and assets available to the Households. This would also provide the base for Population Enumeration by giving a more realistic idea of the population size of the Houselisting blocks, thereby ensuring the more practical carving of the blocks for Population Enumeration.</h4></body></html>";
    doc.write(txt);
    doc.close();
}
        
function clearErrors(){
    errors=document.getElementsByClassName("formError");
    for(let item of errors)
    {
        item.innerHTML="";
    }
};

function setError(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName("formError")[0].innerHTML=error;
};

function validateForm(){
    var returnvalue=true;
    clearErrors();
    var name=document.forms["form"]["name"].value;
    console.log(name);
    if(name.length<5){
        setError("name"," * length of the name is too short");
        returnvalue=false;
    }
    if(name.length>20){
        setError("name"," * length of the name is too long");
        returnvalue=false;
    }
    var email=document.forms["form"]["email"].value;
    console.log(email);
    if(email.charAt(email.length-4)!="."){
        setError("email"," * Email Id entered is not valid");
        returnvalue=false;
    }

    var tel=document.forms["form"]["tel"].value;
    console.log(tel);
    if(tel.length!==10){
        setError("tel"," * Phone number should be of 10 digits");
        returnvalue=false;
    }
    var aadhar=document.forms["form"]["aadhar"].value;
    console.log(aadhar);
    if(aadhar.length!==12){
        setError("aadhar"," * Aadhar number must contain 12 digits");
        returnvalue=false;
    }
    var house=document.forms["form"]["house"].value;
    console.log(house);
    if(house.length<2){
        setError("house"," * House No. must contain atleast two digit");
        returnvalue=false;
    }
    var locality=document.forms["form"]["locality"].value;
    console.log(locality);
    if(locality.length<10){
        setError("locality"," * Name of locality is too small ");
        returnvalue=false;
    }
    var city=document.forms["form"]["city"].value;
    console.log(city);
    if(city.length<=5){
        setError("city"," * Name of city must be valid");
        returnvalue=false;
    }
    var password=document.forms["form"]["password"].value;
    console.log(password);
    if(password.length<6){
        setError("password"," * Password should be of atleast 6 character");
        returnvalue=false;
    }

    var conform_password=document.forms["form"]["conform_password"].value;
    console.log(conform_password);
    if(conform_password!=password){
        setError("conform_password"," * Password and Conform Password should be same");
        returnvalue=false;
    }
    return returnvalue;
};