import {Selector, t} from "testcafe";

class PracticePage{
	constructor(){
		this.headerText              = Selector("h1");
		this.radioButton1            = Selector("input").withAttribute("value","radio1");
		this.radioButton2            = Selector("input").withAttribute("value","radio2");
		this.radioButton3            = Selector("input").withAttribute("value","radio3");
		this.suggestionClassInput    = Selector("#autocomplete");
		this.suggestionClassMexElmnt = Selector(".ui-menu-item-wrapper").withText("Mexico");
		this.dropDownMenu            = Selector("#dropdown-class-example");
		this.dropDownMenuElement2    = Selector("option").withAttribute("value","option2");
		this.dropDownMenuElement3    = Selector("option").withAttribute("value","option3");
		this.checkBoxElement1        = Selector("#checkBoxOption1");
		this.checkBoxElement2        = Selector("#checkBoxOption2");
		this.switchInput             = Selector("#name");
		this.switchAlertBtn          = Selector("#alertbtn");       
		this.elementDisplayedInput   = Selector("#displayed-text"); 
		this.elementDisplayedButtonH = Selector("#hide-textbox"); 
		this.elementDisplayedButtonS = Selector("#show-textbox");        
	}

	async radioButtonExample(){
		await t
			.click(this.radioButton2)
			.click(this.radioButton3)
			.click(this.radioButton1);
	}

	async suggestionClassExample(country){
		await t
			.typeText(this.suggestionClassInput,country)
			.wait(1000)
			.click(this.suggestionClassMexElmnt);
	}

	async dropDownExample(){
		await t
			.click(this.dropDownMenu)
			.click(this.dropDownMenuElement2)
			.click(this.dropDownMenu)
			.click(this.dropDownMenuElement3);
	}

	async checkBoxExample(){
		await t
			.click(this.checkBoxElement1)
			.click(this.checkBoxElement2);
	}

	async alertExample(text){
		await t
			.setNativeDialogHandler(() => true)
			.typeText(this.switchInput,text)
			.click(this.switchAlertBtn);

		const history = await t.getNativeDialogHistory();

		console.log(await history[0].text);
	}

	async elementDisplayedExample(scenario){
		if(scenario === 0){
			await t.click(this.elementDisplayedButtonH);
		}
		else if(scenario === 1){
			await t.click(this.elementDisplayedButtonS);
		}
		else{
			console.log("Wrong option!");
		}
	}
}

export default new PracticePage();