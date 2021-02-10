 name_of_the_student_array=[];

 function submit(){
     var name_1=document.getElementById("student1").value;
     var name_2=document.getElementById("student2").value;
     var name_3=document.getElementById("student3").value;
     var name_4=document.getElementById("student4").value;
     name_of_the_student_array.push(name_1);
     name_of_the_student_array.push(name_2);
     name_of_the_student_array.push(name_3);
     name_of_the_student_array.push(name_4);
     console.log(name_of_the_student_array);
     document.getElementById("display_names_list").innerHTML=name_of_the_student_array;
     document.getElementById("submit_button").style.display="none";
     document.getElementById("sort").style.display="inline-block";

    }
 function sort(){
     name_of_the_student_array.sort();console.log(name_of_the_student_array);
     document.getElementById("display_names_list").innerHTML=name_of_the_student_array;
 }   
    