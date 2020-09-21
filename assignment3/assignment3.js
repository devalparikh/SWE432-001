
///////////////////
//    Globals    //
///////////////////

var recordedVariableNames = new Set();

////////////////////////////////////////////
//    Define Variables Table Functions    //
////////////////////////////////////////////

// Gets all variables in the table
function getVariables() {

    var table = document.getElementById('var_table');
    for (var r = 1, n = table.rows.length; r < n; r++) {
        console.log(document.getElementById('defined_variable_' + r).value);
        console.log(document.getElementById('defined_value_' + r).value);
    }

}

// Adds a new variable to the table of defined variables
function addVarRow() {
    var oRow = document.getElementById("var_table").insertRow(document.getElementById("var_table").rows.length);
    oRow.onmouseover = function () { document.getElementById("var_table").clickedRowIndex = this.rowIndex; };
    var oCell1 = oRow.insertCell(0);
    var oCell2 = oRow.insertCell(1);
    var oCell3 = oRow.insertCell(2);
    var oCell4 = oRow.insertCell(3);

    var curRowIndex = document.getElementById("var_table").rows.length - 1;
    var userInputtedVariableName = document.getElementById('defined_variable_1').value;
    var userInputtedVariableValue = document.getElementById('defined_value_1').value;

    // Check if variable name already exists
    if(recordedVariableNames.has(userInputtedVariableName)) {
        console.log(userInputtedVariableName);
        document.getElementById("varErrorMessage").innerHTML = 'Variable name "' + userInputtedVariableName + '" already exists. Please enter a unique variable name.';
        return;
    } else {
        recordedVariableNames.add(userInputtedVariableName);
        document.getElementById("varErrorMessage").innerHTML = ''
    }

    oCell1.innerHTML = "<p id='defined_variable_" + curRowIndex + "' >" + userInputtedVariableName + "</p>";
    oCell2.innerHTML = "=";
    oCell3.innerHTML = "<p id='defined_value_" + curRowIndex + "' >" + userInputtedVariableValue + "</p>";
    // oCell4.innerHTML = "<input class='button' type=button value=\" Delete Variable \" onClick=\"delVarRow()\">";
    oCell4.innerHTML = "<th><button type=button class='fa fa-trash button' style='font-size:24px' onClick='delVarRow()'></button></th>"



    // Go through each logical predicate row and append to boolean variable options

    var table = document.getElementById('logic_table');

    for (var r = 1, n = table.rows.length; r < n; r++) {

        var boolvar1 = document.getElementById('ops1_' + r);
        var boolvar2 = document.getElementById('ops2_' + r);

        var newOption1 = document.createElement("option");
        newOption1.text = document.getElementById("defined_variable_1").value;
        newOption1.value = document.getElementById('defined_value_1').value;

        var newOption2 = document.createElement("option");
        newOption2.text = document.getElementById("defined_variable_1").value;
        newOption2.value = document.getElementById('defined_value_1').value;


        boolvar1.add(newOption1);
        boolvar2.add(newOption2)

    }

    document.getElementById("defined_variable_1").value = "";

}

// Deletes defined variable
function delVarRow() {
    document.getElementById("var_table").deleteRow(document.getElementById("var_table").clickedRowIndex);

    var table = document.getElementById('logic_table');

    for (var r = 1, n = table.rows.length; r < n; r++) {
        var boolvar1 = document.getElementById('ops1_' + r);
        var boolvar2 = document.getElementById('ops2_' + r);
        boolvar1.remove(document.getElementById("var_table").clickedRowIndex);
        boolvar2.remove(document.getElementById("var_table").clickedRowIndex);

    }
}

//////////////////////////////////////////////
//    Logical Predicates Table Functions    //
//////////////////////////////////////////////

// Adds a new logical predicate statement to the predicate table
function addPredRow() {
    var oRow = document.getElementById("logic_table").insertRow(document.getElementById("logic_table").rows.length);
    oRow.onmouseover = function () { document.getElementById("logic_table").clickedRowIndex = this.rowIndex; };
    var oCell1 = oRow.insertCell(0);
    var oCell2 = oRow.insertCell(1);
    var oCell3 = oRow.insertCell(2);
    var oCell4 = oRow.insertCell(3);
    var oCell5 = oRow.insertCell(4);


    var curRowIndex = document.getElementById("logic_table").rows.length - 1;
    console.log(curRowIndex)

    // Go through each defined variable row and populate the boolean variable options

    var varTable = document.getElementById('var_table');

    var bool1Options = `<select type=text name=Boolean1_` + curRowIndex + `[] id="ops1_` + curRowIndex + `">`;
    var bool2Options = `<select type=text name=Boolean2_` + curRowIndex + `[] id="ops2_` + curRowIndex + `">`;

    bool1Options += `<option value="true">True</option>`;
    bool2Options += `<option value="true">True</option>`;
    bool1Options += `<option value="false">False</option>`;
    bool2Options += `<option value="false">False</option>`;
    for (var r = 2, n = varTable.rows.length; r < n; r++) {
        console.log('r', r);
        console.log(document.getElementById('defined_variable_' + r).innerHTML);
        var curVariable = document.getElementById('defined_variable_' + r).innerHTML;
        var curValue = document.getElementById('defined_value_' + r).innerHTML;
        console.log(curValue);
        bool1Options += `<option value="` + curValue + `">` + curVariable + `</option>`;
        bool2Options += `<option value="` + curValue + `">` + curVariable + `</option>`;
    }

    bool1Options += `</select>`;
    bool2Options += `</select>`;


    oCell1.innerHTML = bool1Options;

    oCell2.innerHTML = `
        <select type=text name=LogicOp1_` + curRowIndex + `[] id=LogicOp1_` + curRowIndex + `>                                       
            <optgroup label="Logical Operators">
                    <option value="logic-and">&&</option>
                    <option value="logic-or">||</option>
            </optgroup>
            <optgroup label="Bitwise Operators">
                    <option value="bitwise-and">&</option>
                    <option value="bitwise-or">|</option>
            </optgroup>
        </select>
    `;

    oCell3.innerHTML = bool2Options;

    oCell4.innerHTML = `
        <select type=text name=LogicOp2_` + curRowIndex + `[] id=LogicOp2_` + curRowIndex + `>
            <option value="none">None</option>

            <optgroup label="Logical Operators">
                    <option value="logic-and">&&</option>
                    <option value="logic-or">||</option>
            </optgroup>
            <optgroup label="Bitwise Operators">
                    <option value="bitwise-and">&</option>
                    <option value="bitwise-or">|</option>
            </optgroup>
        </select>
    `;

    oCell5.innerHTML = "<th><button type=button class='fa fa-trash button' style='font-size:24px;' onClick='delPredRow()'></button></th>";

    // Force the user to select a logical operator to link the next predicate
    if (curRowIndex > 1) {

        var table = document.getElementById('logic_table');

        var secondToLastRow = table.rows[curRowIndex - 1];


        console.log('test', secondToLastRow.cells[3].innerHTML.split('\n'))

        secondToLastRow.cells[3].innerHTML = `
            ` + secondToLastRow.cells[3].innerHTML.split('\n')[1] + `
            <optgroup label="Logical Operators">
                    <option value="logic-and">&amp;&amp;</option>
                    <option value="logic-or">||</option>
            </optgroup>
            <optgroup label="Bitwise Operators">
                    <option value="bitwise-and">&amp;</option>
                    <option value="bitwise-or">|</option>
            </optgroup>
        </select>
                
        `
    }

}

// Deletes a logical predicate statement
function delPredRow() {
    document.getElementById("logic_table").deleteRow(document.getElementById("logic_table").clickedRowIndex);
}