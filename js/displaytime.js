<!-- Grabs time and displays in view port -->
var myDate = new Date(); 
  
  
/* hour is before noon */
if ( myDate.getHours() < 12 )  
{ 
    document.write(" what's the plan for this morning? "); 
} 
else  /* Hour is from noon to 5pm (actually to 5:59 pm) */
if ( myDate.getHours() >= 12 && myDate.getHours() <= 17 ) 
{ 
    document.write(" what would you like to do this afternoon? "); 
} 
else  /* the hour is after 5pm, so it is between 6pm and midnight */
if ( myDate.getHours() > 17 && myDate.getHours() <= 24 ) 
{ 
    document.write(" what are you up to this evening?"); 
} 
else  /* the hour is not between 0 and 24, so something is wrong */
{ 
    document.write(" what would you like to do today? "); 
} 
                                  