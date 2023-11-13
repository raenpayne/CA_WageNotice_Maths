# CA_WageNotice_Maths
I've added some javascript to the CA Wage Notice to automatically calculate OT 1.5x and pull today's date.

Employer information such as Legal Name, address, contact information, etc. is blank if you'd like to use this version of the California Wage Notice!

# About
The Wage Theft Protection Act of 2011 requires all employers to provide employees, at the time of hire, with a written notice containing specified language regarding rates of pay, whether hourly, salaried, etc. For further details about what is required see:

[California Department of Industrial Relations, Section 3](https://www.dir.ca.gov/dlse/faqs-noticetoemployee.html#:~:text=A%3A%20Workers%20have%20to%20receive,allowances%2C%20if%20any%2C%20claimed%20as)

And:
[Wage Theft Protection Act](https://www.dir.ca.gov/dlse/governor_signs_wage_theft_protection_act_of_2011.html)

# Standard Form
The Labor Commissioner is required by law to provide employers with a Wage Notice form. However, it's pretty bare bones. PDFs can do a lot more than include basic text fields.

# Background
When filling out over a hundred forms for intern season along with regular new hires I wanted to be sure my maths were accurate on every form. I also wanted to speed up filling out the date for the employer. To do this I edited the form to include some basic javascript and a date picker.

# Features
1. Start Date now has a date picker. Why type in the start date when you can select it in a dropdown calendar?

2. Rate(s) of Pay: For hourly employees you'll need to fill in the hourly rate as well as the overtime rate. Why do this manually when you can add some javascript and have Acrobat calculate and fill in the amount for you? Increases accuracy and decreases time to complete the form. 

3. The Employer Date field below your signature uses some javascript to pull the system's time. Just double-click in, sometimes near the field as it's a bit finicky, and today's date will be filled out for you. Be sure to do this before signing the form.

# Caveats
Employer Date - double-click to update a saved date

When saving the form today's date will also be saved. When you prepare the form for a future new hire you'll need to change the date. Unfortunately Acrobat does not make this obvious. You'll need to double-click in or near the field to update it.
