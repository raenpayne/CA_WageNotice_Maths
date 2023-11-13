// Maths code - calculates overtime rate at 1.5

// Set Up

// The below code is added to the Validate tab under Text Field Properties. 
// Right click a text field, scroll to properties, click the Validate tab. Select the Run custom validation script radio and click Edit. Add code and click save. Then close. 
// On Format tab select Number as the Format Category
// The Actions tab should now be set to Select Trigger: Mouse UP and Select Action: Execute a menu item
// Ensure the General tab is set to visible and Read Only is unchecked
// Unfortunately, Prepare Form is only accessible with an Adobe license and cannot be accessed with the free version.

if(event.value)

// You can change the name of the field in " ". 
// It must match the field name on the form. 
// If you haven't customized the name of the field leave the code as is.

this.getField("Overtime Rates of Pay").value = (event.value*1.5);

else
// Sets the default value of the field to blank. 
this.getField("Ovetime Rates of Pay").value = "";
