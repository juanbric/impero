document.addEventListener('DOMContentLoaded', function () {

    const addFile = document.querySelector('#addFile');
    const addSection = document.querySelector('#addSection');
    const addQuestion = document.querySelector('#addQuestion');
    const openEnded = document.getElementById('openEnded');
    const multiple = document.getElementById('multiple');
    var addOption = document.getElementById('addOption');
    var addedStuff = document.getElementById('addedStuff');

    function newSection() {
        var newLesson = document.getElementById('newLesson');
        
        var lessonNr = 1;
        var currentLess = lessonNr++;
    
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
        var questionType = document.createElement('button');
        questionType.className = 'btn btn-light dropdown-toggle shadow-sm';
        questionType.type = 'button';
        questionType.id = 'dropdownMenuButton';
        questionType.setAttribute("data-toggle", "dropdown");
        questionType.setAttribute("aria-haspopup", "true");
        questionType.setAttribute("aria-expanded", "false");
        questionType.appendChild(document.createTextNode('Question type'));
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
        dropDownAddedQ.appendChild(questionType);
        dropDownAddedQ.appendChild(dropMenu);
        dropMenu.appendChild(openBtn);
        dropMenu.appendChild(multBtn);
        formNewQ.appendChild(dropDownAddedQ);
        addedStuff.appendChild(formNewQ);
      
        openEnded.onclick = open;
        
    }
    addQuestion.onclick = newQuestion;
    
    function open() {
    
        var formOpen = document.createElement('div');
        formOpen.className = ('form-group');
        formOpen.id = ('newQuestion');
        var openQuestion = document.createElement('input');
        openQuestion.className = 'form-control py-4';
        openQuestion.placeholder = 'Enter question';
        openQuestion.required = true;
        formOpen.appendChild(openQuestion);
    
        var delOpen = document.createElement('div');
        delOpen.className = ('button')
        delOpen.id = ('deleteBtn')
        var deleteBtn = document.createElement('button');
        deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
        deleteBtn.appendChild(document.createTextNode('Delete Question'));
        delOpen.appendChild(deleteBtn);
        addedStuff.appendChild(delOpen)
    
    
            function delQuestion() {
                openQuestion.hidden = true;
                delOpen.hidden = true;
                
                function newQuestion() {
        
                    var addedQuestion = document.querySelector('#addedQuestion');
                    var questionType = document.createElement('button');
                    questionType.className = 'btn btn-white dropdown-toggle';
                    questionType.type = 'button';
                    questionType.id = 'dropdownMenuButton';
                    questionType.setAttribute("data-toggle", "dropdown");
                    questionType.setAttribute("aria-haspopup", "true");
                    questionType.setAttribute("aria-expanded", "false");
                    questionType.appendChild(document.createTextNode('Question type'));
                    addedQuestion.appendChild(questionType);
                  
                    openEnded.onclick = open;
                    
                }
                newQuestion();
    
            }
    
    delOpen.onclick = delQuestion
    
        const questionType = document.getElementById('dropdownMenuButton');
        questionType.hidden = true;
                                   
    }
    openEnded.onclick = open;
    
    
    
    function multipleChoice() {
    
        var newQuestion = document.getElementById('newQuestion');
        var multipleQuestion = document.createElement('input');
        multipleQuestion.className = 'form-control py-4';
        multipleQuestion.placeholder = 'Enter question';
        multipleQuestion.required = true;
        newQuestion.appendChild(multipleQuestion);
       
        var options = document.getElementById('options');
        var option1 = document.createElement('input');
        option1.className = 'form-control py-1';
        option1.placeholder = 'Enter option 1';
        option1.required = true;
        options.appendChild(option1);
        
        var option2 = document.createElement('input');
        option2.className = 'form-control py-1';
        option2.placeholder = 'Enter option 2';
        option2.required = true;
        options.appendChild(option2);

        var addOp = document.createElement('button');
        addOp.className = 'btn btn-light btn-sm float-right delete'
        addOp.appendChild(document.createTextNode('Add option'));
        addOption.appendChild(addOp);


        function newOption() {
        var option3 = document.createElement('input');
        option3.className = 'form-control py-1';
        option3.placeholder = `Enter option 3`;
        option3.required = true;
        options.appendChild(option3);

        var delOp = document.createElement('button');
        delOp.className = 'btn btn-danger btn-sm float-right delete'
        delOp.appendChild(document.createTextNode('Delete option'));
        addOption.appendChild(delOp);

        }

        addOp.onclick = newOption;
    
        
        const questionType = document.getElementById('dropdownMenuButton');
        questionType.hidden = true;
                                   
    }
    multiple.onclick = multipleChoice;
    
    
    function newFile() {
        
        var newFile = document.getElementById('newFile');
        var addedFile = document.createElement('input')
        addedFile.className = 'custom-file-input';
        addedFile.type = 'file';
        addedFile.id = 'inputGroupFile01';
        var addedLabel = document.createElement('label');
        addedLabel.className = 'custom-file-label';
        addedLabel.htmlFor = 'inputGroupFile01';
        addedLabel.appendChild(document.createTextNode('Choose file'));
        newFile.appendChild(addedFile);
        newFile.appendChild(addedLabel);
    
    }
    
    addFile.onclick = newFile
    
    
    



})

