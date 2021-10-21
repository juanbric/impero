document.addEventListener('DOMContentLoaded', function () {

    const addFile = document.querySelector('#addFile');
    const addSection = document.querySelector('#addSection');
    const addQuestion = document.querySelector('#addQuestion');
    const addedStuff = document.getElementById('addedStuff');
    const lineBr = document.createElement("br");
    const lineBr1 = document.createElement("br");
            

    function newSection() {
        var newLesson = document.getElementById('newLesson');
        
        var lessonNr = 2;
        
        var header = document.createElement('div');
        header.className = 'card-header';
        
        var h3 = document.createElement('h3');
        h3.className = 'text-center font-weight-light my-4';
        h3.appendChild(document.createTextNode(`Lesson ${lessonNr}`));
        

        var body = document.createElement('div');
        body.className = 'card-body';
        var form = document.createElement('form');
        form.id = (`lesson${lessonNr}`);
        var formGroup = document.createElement('div');
        formGroup.className = ('form-group');
        var lessonLabel = document.createElement('label');
        lessonLabel.className = ('small mb-1');
        lessonLabel.for = (`lessonName${lessonNr}`);
        lessonLabel.appendChild(document.createTextNode('Lesson Name'));
        var lessonInput = document.createElement('input');
        lessonInput.className = ('form-control py-4');
        lessonInput.id = (`lessonName${lessonNr}`);
        lessonInput.type = ('Name');
        lessonInput.placeholder = ('Enter lesson name');
        lessonInput.required = true;
        var customFile = document.createElement('div');
        customFile.className = ('custom-file');
        var inputFile = document.createElement('input');
        inputFile.className = ('custom-file-input');
        inputFile.id = (`inputGroupFile${lessonNr}`);
        labelFile = document.createElement('label');
        labelFile.className = ('custom-file-label');
        labelFile.htmlFor = (`inputGroupFile${lessonNr}`);
        labelFile.appendChild(document.createTextNode('Choose file'));

        var formGroup2 = document.createElement('div');
        formGroup2.className = ('form-group d-flex justify-content-center');
        var dropDown = document.createElement('div');
        dropDown.className = ('dropdown');
        var dropBtn = document.createElement('button');
        dropBtn.className = ('btn btn-white dropdown-toggle');
        dropBtn.type = ('button');
        dropBtn.id = ('dropBtn');
        dropBtn.setAttribute("data-toggle", "dropdown");
        dropBtn.setAttribute("aria-haspopup", "true");
        dropBtn.setAttribute("aria-expanded", "false");
        dropBtn.appendChild(document.createTextNode('Question type'));
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
        
        var newQ = document.createElement('div');
        newQ.className = ('form-group');
        newQ.id = ('newQuestion');

    
        
        newLesson.appendChild(header);
        newLesson.appendChild(body);
        header.appendChild(h3);
        body.appendChild(form);
        form.appendChild(formGroup);
        form.appendChild(customFile);
        form.appendChild(formGroup2);
        formGroup.appendChild(lessonLabel);
        formGroup.appendChild(lessonInput);
        customFile.appendChild(inputFile);
        customFile.appendChild(labelFile);
        formGroup2.appendChild(dropDown);
        dropDown.appendChild(dropBtn);
        dropDown.appendChild(dropMenu);
        dropMenu.appendChild(multBtn);
        dropMenu.appendChild(openBtn);

`<div class="card-header"><h3 class="text-center font-weight-light my-4">Lesson 1</h3></div>
<div class="card-body">
    <form id="lesson1">
        <div class="form-group">
            <label class="small mb-1" for="lessonName">Lesson Name</label>
            <input class="form-control py-4" id="lessonName" type="Name" placeholder="Enter lesson name" required/>
        </div> 
        <div class="form-group">
            <div id="addedStuff"></div>
            <div class="form-group" id="options"></div>
            <div class="button" id="addOption"></div>
            </div>
    </form>
</div>
<div class="card-footer">
    <button type="button" id="addQuestion" class="btn btn-light float-right shadow">Add Question</button>
    <button type="button" id="addFile" class="btn btn-light float-left shadow">Add File</button>
</div>
<div id="newLesson"></div>`                         


        newLesson.innerHTML = `
        <div class="card-header"><h3 class="text-center font-weight-light my-4">Lesson ${lessonNr}</h3></div>
        <div class="card-body">
            <form id="lesson1">
                <div class="form-group">
                    <label class="small mb-1" for="lessonName">Lesson Name</label>
                    <input class="form-control py-4" id="lessonName" type="Name" placeholder="Enter lesson name" required/>
                </div>        
                <div class="custom-file">
                    <input type="file" class="custom-file-input" id="inputGroupFile01">
                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
                  </div><br><br>
                <div class="form-group">
                    <div class="dropdown">
                        <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Question type
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <button class="dropdown-item" id="openEnded">Open-ended</button>
                          <button class="dropdown-item" id="multiple">Multiple choice</button>
                        </div>
                    </div>
                      <div class="form-group" id="newQuestion"></div>
                      <div class="button" id="deleteBtn"></div>
                      <div class="form-group" id="options"></div>
                      <div class="dropdown" id="addedQuestion"><div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="dropdown-item" id="openEnded">Open-ended</button>
                        <button class="dropdown-item" id="multiple">Multiple choice</button>
                      </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="card-footer">
        <button type="button" id="addQuestion" class="btn btn-light float-right shadow">Add Question</button>
        <button type="button" id="addFile" class="btn btn-light float-left shadow">Add File</button>
    </div></div>

<div id="newLesson"></div>

        `;

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
            addOption.appendChild(addOp);
            formMult.appendChild(addOption);
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
            addOption.appendChild(delOp);
    
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


