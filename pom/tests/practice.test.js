import {URL} from "../data/constants.js"
import practicePage from "../pages/practice-page";

fixture("Rahul Shetty automation page for juniors")
    .page `${URL.BASE_URL}`
    
    .beforeEach(async t=>{
        await t.maximizeWindow();
    });

test.skip("As a user I want to click on radio button 2, then 3 and finally 1.",async t=>{
    await practicePage.radioButtonExample();

    await expect(); //radiobutton 1 marcado
});

test("As a user I want to type the word 'Me' on the Suggestion Class input and select Mexico",async t=>{
    await practicePage.suggestionClassExample("Me");

    await t.expect(practicePage.suggestionClassInput.value).eql("Mexico");
});

test.skip("As a user I want to select option 2 and then option 3 on Dropdown Example", async t=>{
    await practicePage.dropDownExample();

    await t.expect(practicePage.dropDownMenuElement3.innerText).eql("Option3");
});

test.skip("As a user I want to check option 1 and 2 on Checkbox Example",async t=>{
    await practicePage.checkBoxExample();

    //
});

test.skip("As a user I want to type 'Stori Card' and click on the Alert button, then click Ok message",async t=>{
    await practicePage.alertExample("Stori Card");

});

test.skip("As a user I want to know if Displayed Example is hidden or shown",async t=>{
    await practicePage.elementDisplayedExample();

    //await t.expect(practicePage.elementDisplayedInput.exists).ok();
});