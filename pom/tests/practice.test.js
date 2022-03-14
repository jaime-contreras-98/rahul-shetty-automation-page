/* eslint-disable no-undef */
import {URL,STRINGS,MESSAGES} from "../data/constants.js";
import practicePage from "../pages/practice-page";

fixture("Rahul Shetty automation page for juniors")
	.page `${URL.BASE_URL}`
    
	.beforeEach(async t=>{
		await t.maximizeWindow();
	});

test("As a user I want to open https://rahulshettyacademy.com/AutomationPractice/ website -{regression}",async t=>{
	await t.expect(practicePage.headerText.innerText).contains(STRINGS.HEADER_TEXT);
});

test("As a user I want to click on radio button 2, then 3 and finally 1 -{smoke}",async t=>{
	await practicePage.radioButtonExample();

	await t.expect(practicePage.radioButton1.checked).ok(); 
});

test("As a user I want to type the word 'Me' on the Suggestion Class input and select Mexico -{smoke}",async t=>{
	await practicePage.suggestionClassExample(STRINGS.COUNTRY_INPUT);

	await t.expect(practicePage.suggestionClassInput.value).eql(STRINGS.COUNTRY_TEXT);
});

test("As a user I want to select option 2 and then option 3 on Dropdown Example -{smoke}", async t=>{
	await practicePage.dropDownExample();

	await t.expect(practicePage.dropDownMenu.value).eql(STRINGS.DROPDOWN_TEXT);
});

test("As a user I want to check option 1 and 2 on Checkbox Example -{smoke}",async t=>{
	await practicePage.checkBoxExample();

	await t.expect(practicePage.checkBoxElement2.checked && practicePage.checkBoxElement2.checked).ok();
});

test("As a user I want to type 'Wizeliner' and click on the Alert button, and print alert popup message -{smoke}",async t=>{
	await practicePage.alertExample(STRINGS.ALERT_INPUT);

	const history = await t.getNativeDialogHistory();
    
	await t.expect(history[0].text).eql(MESSAGES.ALERT_MESSAGE);
});

test("As a user I want to know if Displayed Example is hidden or shown -{regression}",async t=>{
	const randomScenario = Math.floor(Math.random() * 2);
    
	await practicePage.elementDisplayedExample(randomScenario);

	const scenarioResult = await practicePage.elementDisplayedInput.visible;

	scenarioResult===true?console.log(MESSAGES.ELEMENT_SHOWN):console.log(MESSAGES.ELEMENT_HIDDEN);

	await t.expect(scenarioResult === true || scenarioResult === false).ok();
});