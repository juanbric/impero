document.addEventListener('DOMContentLoaded', function () {

    const addFile = document.querySelector('#addFile');
    const addSection = document.querySelector('#addSection');
    const addQuestion = document.querySelector('#addQuestion');
    const addedStuff = document.getElementById('addedStuff');
    const lineBr = document.createElement("br");
    const lineBr1 = document.createElement("br");
    var lessonNr = 1;
    
    
    function newSection() {
        var newLesson = document.getElementById('newLesson');
        var header = document.createElement('div');
        header.className = 'card-header';
        var h3 = document.createElement('h3');
        h3.className = 'text-center font-weight-light my-4';
        h3.textContent = "Lesson " + (++lessonNr);
        var body = document.createElement('div');
        body.className = 'card-body';
        var form = document.createElement('form');
        form.id = (`lesson${lessonNr}`);
        var formGroup = document.createElement('div');
        formGroup.className = ('form-group');
        var lessonLabel = document.createElement('label');
        lessonLabel.className = ('small mb-1');
        lessonLabel.for = "lessonName" + (lessonNr);;
        lessonLabel.appendChild(document.createTextNode('Lesson Name'));
        var lessonInput = document.createElement('input');
        lessonInput.className = ('form-control py-4');
        lessonInput.id = "lessonName" + (lessonNr);
        lessonInput.type = ('Name');
        lessonInput.placeholder = ('Enter lesson name');
        lessonInput.required = true;
        var formGroup1 = document.createElement('div');
        formGroup1.className = ('form-group');
        var footer = document.createElement('div');
        footer.className = ('card-footer');
        var addQ = document.createElement('button');
        addQ.className = ('btn btn-light float-right shadow');
        addQ.id = ('addQuetion');
        addQ.type = ('button');
        addQ.appendChild(document.createTextNode('Add Question'));
        var addF = document.createElement('button');
        addF.className = ('btn btn-light float-left shadow');
        addF.id = ('addFile');
        addF.type = ('button');
        addF.appendChild(document.createTextNode('Add File'));
        
        newLesson.appendChild(header);
        header.appendChild(h3);
        newLesson.appendChild(body);
        body.appendChild(form);
        form.appendChild(formGroup);
        form.appendChild(formGroup1);
        formGroup.appendChild(lessonLabel);
        formGroup.appendChild(lessonInput);
        formGroup1.appendChild(addedStuff);
        newLesson.appendChild(footer);
        footer.appendChild(addQ);
        footer.appendChild(addF);
        newLesson.appendChild(lineBr);
    }
    addSection.onclick = newSection;


    function newQuestion() {
        
        var formNewQ = document.createElement('div');
        formNewQ.className = ('form-group');
        var dropDownAddedQ = document.createElement('div');
        dropDownAddedQ.className = ('dropdown d-flex justify-content-center')
        var questionType1 = document.createElement('button');
        questionType1.className = 'btn btn-light dropdown-toggle shadow-sm';
        questionType1.type = 'button';
        questionType1.id = 'dropdownMenuButton';
        questionType1.setAttribute("data-toggle", "dropdown");
        questionType1.setAttribute("aria-haspopup", "true");
        questionType1.setAttribute("aria-expanded", "false");
        questionType1.appendChild(document.createTextNode('Question type'));
        var dropMenu = document.createElement('div');
        dropMenu.className = ('dropdown-menu');
        dropMenu.setAttribute("aria-labelledby", "dropBtn");
        var openBtn = document.createElement('button');
        openBtn.className = ('dropdown-item');
        openBtn.id = ('openEnded');
        openBtn.appendChild(document.createTextNode('Open-ended'));
        var multBtn = document.createElement('button');
        multBtn.className = ('dropdown-item');
        multBtn.id = ('multiple');
        multBtn.appendChild(document.createTextNode('Multiple choice'));
        dropDownAddedQ.appendChild(questionType1);
        dropDownAddedQ.appendChild(dropMenu);
        dropMenu.appendChild(openBtn);
        dropMenu.appendChild(multBtn);
        formNewQ.appendChild(dropDownAddedQ);
        addedStuff.appendChild(formNewQ);
    
        openBtn.onclick = hideNewOp;
        multBtn.onclick = hideNewMul; 

        function hideNewMul() {
            questionType1.hidden = true;
            multipleChoice()
        }

        function hideNewOp() {
            questionType1.hidden = true;
            open()
        }

        function multipleChoice() {

            var formMult = document.createElement('div');
            formMult.className = 'form-group';
            var options = document.createElement('div');
            options.className = 'form-group px-4';
            var multipleQuestion = document.createElement('input');
            var container = document.createElement('div');
            container.className = ('container');
            multipleQuestion.className = 'form-control py-4';
            multipleQuestion.placeholder = 'Enter question';
            multipleQuestion.required = true;
            formMult.appendChild(multipleQuestion);
            formMult.appendChild(lineBr);
            container.appendChild(formMult);
            addedStuff.appendChild(formMult);
           
            var option1 = document.createElement('input');
            option1.className = 'form-control py-4';
            option1.placeholder = 'Option 1';
            option1.required = true;
            options.appendChild(option1);
            
            var option2 = document.createElement('input');
            option2.className = 'form-control py-4';
            option2.placeholder = 'Option 2';
            option2.required = true;
            options.appendChild(option2);
            formMult.appendChild(options);
    
            var addOp = document.createElement('button');
            addOp.className = 'btn btn-light btn-sm float-right delete'
            addOp.appendChild(document.createTextNode('Add option'));
            formMult.appendChild(addOp);
            formMult.appendChild(lineBr);
            formMult.appendChild(lineBr1);
    
            function newOption() {
            var option3 = document.createElement('input');
            option3.className = 'form-control py-4';
            option3.placeholder = `Option 3`;
            option3.required = true;
            options.appendChild(option3);
    
            var delOp = document.createElement('button');
            delOp.className = 'btn btn-light btn-sm float-right delete shadow-sm'
            delOp.appendChild(document.createTextNode('Delete option'));
            formMult.appendChild(delOp);
    
            }
    
            addOp.onclick = newOption;
        
            
            const questionType = document.getElementById('dropdownMenuButton');
            questionType.hidden = true;
                                       
        }

        function open() {
    
            var formOpen = document.createElement('div');
            formOpen.className = ('form-group');
            formOpen.id = ('newQuestion');
            var openQuestion = document.createElement('input');
            openQuestion.className = 'form-control py-4';
            openQuestion.placeholder = 'Enter question';
            openQuestion.required = true;
            formOpen.appendChild(openQuestion);
            formNewQ.appendChild(formOpen);
        
            var delOpen = document.createElement('div');
            delOpen.className = ('button');
            delOpen.id = ('deleteBtn');
            var deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-light btn-sm float-right delete shadow-sm';
            deleteBtn.appendChild(document.createTextNode('Delete Question'));
            delOpen.appendChild(deleteBtn);
            delOpen.appendChild(lineBr);
            delOpen.appendChild(lineBr1);
            formNewQ.appendChild(delOpen)
    
                function delQuestion() {
                    openQuestion.hidden = true;
                    delOpen.hidden = true;
                    var questionType = document.getElementById('dropdownMenuButton');
                    questionType.hidden = true
                }
        
        delOpen.onclick = delQuestion
                
        }    

    }
    addQuestion.onclick = newQuestion;
    
    function newFile() {
        
        var customFile = document.createElement('div');
        customFile.className = 'custom-file';
        var addedFile = document.createElement('input');
        addedFile.className = 'custom-file-input';
        addedFile.type = 'file';
        addedFile.id = 'inputGroupFile01';
        var addedLabel = document.createElement('label');
        addedLabel.className = 'custom-file-label';
        addedLabel.htmlFor = 'inputGroupFile01';
        addedLabel.appendChild(document.createTextNode('Choose file'));
        customFile.appendChild(addedFile);
        customFile.appendChild(addedLabel);
        
    
        var delFile = document.createElement('div');
        delFile.className = ('button');
        delFile.id = ('deleteBtn');
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-light btn-sm float-right delete shadow-sm';
        deleteBtn.appendChild(document.createTextNode('Delete File'));
        delFile.appendChild(deleteBtn);
        addedStuff.appendChild(customFile);
        addedStuff.appendChild(lineBr);
        addedStuff.appendChild(lineBr1);
        addedStuff.appendChild(delFile)
   
        delFile.appendChild(lineBr);
        delFile.appendChild(lineBr1);
         
    
            function deleteFile() {
                customFile.hidden = true;
                delFile.hidden = true;
                }
    
    delFile.onclick = deleteFile
    

    }
    
    addFile.onclick = newFile
    
    

})


