
    function pan() {
        event.preventDefault();
    const name = document.querySelector("#first").value;
    if (name == "" || name == null || name.trim == "") {
        alert("Invalid Name")
           return false;
     }
    const father_name = document.querySelector("#fathername").value;
    if (father_name== "" || father_name == null || father_name.trim == "") {
        alert("Fill_The_Fathername")
            return false;
       }
    const mother_name = document.querySelector("#mathername").value;
    if (mother_name == "") {
        alert("Fill The Mothername")
             return false;
        }
    const mobile = document.querySelector("#mobilenumber").value;
    if (mobile == "") {
        alert("Enter mobile_number")
              return false;
        }
    const email = document.querySelector("#Email").value;
    if (email == "") {
        alert("Enter_mail.ID")
          return false;
             }
    const dob = document.querySelector("#dob").value;
    if (dob == "") {
        alert("Enter_date_if_birth")
             return false;
                          }
    const aadharnumber = document.querySelector("#aadharnumber").value;
    if (aadharnumber == "") {
        alert("Enter_your_Aadhar_number")
              return false;
                          }
    const gender = document.querySelector("#gender").value;
    if (gender == "") {
        alert("Please_Select_gender")
                return false;
          }
          let userobj={
            "Name" : name,
            "FatherName": father_name,
            "MotherName": mother_name,
            "MobileNumber":mobile,
            "EmailID":email,
            "DateOfBirth":dob,
            "AadharNumber":aadharnumber,
             "Gender":gender,
        };
        console.log(userobj);
 // console.log(name + " " + father_name + " " + mother_name + " " + mobile + " " + email + " " + dob + " " + aadharnumber + " " + gender)
    localStorage.setItem('indexform' , JSON.stringify(userobj)); 
    alert("verified");
    window.location.href = "residential.html";  
}
