import {Selector, t} from 'testcafe';

class PracticePage{

    constructor(){
        this.radioButton1            = Selector("input").withAttribute("value","radio1");
        this.radioButton2            = Selector("input").withAttribute("value","radio2");
        this.radioButton3            = Selector("input").withAttribute("value","radio3");;
        this.suggestionClassInput    = Selector("#autocomplete");
        this.suggestionClassMexElmnt = Selector(".ui-menu-item-wrapper").withText("Mexico");
        this.dropDownMenu            = Selector("#dropdown-class-example");
        this.dropDownMenuElement2    = Selector("option").withAttribute("value","option2");
        this.dropDownMenuElement3    = Selector("option").withAttribute("value","option3");
        this.checkBoxElement1        = Selector("#checkBoxOption1");
        this.checkBoxElement2        = Selector("#checkBoxOption2");
        this.switchInput             = Selector("#name");
        this.switchAlertBtn          = Selector("#alertbtn");       
        this.switchConfirmButton     = Selector("#confirmbtn");   
        this.switchConfirmButtonShown= Selector("input").withAttribute("style","display: block");
        this.switchConfirmButtonHide = Selector("input").withAttribute("style","display: none");
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
            .click(this.suggestionClassMexElmnt)
    }

    async dropDownExample(){
        await t
            .click(this.dropDownMenu)
            .click(this.dropDownMenuElement2)
            .click(this.dropDownMenu)
            //.click(this.dropDownMenuElement3);
    }

    async checkBoxExample(){
        await t
            .click(this.checkBoxElement1)
            .click(this.checkBoxElement2);
    }

    async alertExample(string){
        await t
            .typeText(this.switchInput,string)
            //.setNativeDialogHandler(()=> true)
            //const history = await t.getNativeDialogHistory();
            await t.click(this.switchAlertBtn)

            //.click("#button");
    
    }

    async elementDisplayedExample(){
        await t.click(this.elementDisplayedButtonH);

        if(await this.switchConfirmButtonShown.exists){
            console.log("This element is shown");
        }else{
            console.log("This element is hidden");
        }
    }
}

export default new PracticePage();