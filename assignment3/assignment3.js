
// Define Variables Table Functions

function getVariables() {

    var table = document.getElementById('var_table');
    for (var r = 1, n = table.rows.length; r < n; r++) {
        console.log(document.getElementById('defined_variable_'+r).value);
        console.log(document.getElementById('defined_value_'+r).value);
    }

}

function addVarRow() {
    var oRow = document.getElementById("var_table").insertRow(document.getElementById("var_table").rows.length);
    oRow.onmouseover = function () { document.getElementById("var_table").clickedRowIndex = this.rowIndex; };
    var oCell1 = oRow.insertCell(0);
    var oCell2 = oRow.insertCell(1);
    var oCell3 = oRow.insertCell(2);
    var oCell4 = oRow.insertCell(3);

    var curRowIndex = document.getElementById("var_table").rows.length - 1;

    oCell1.innerHTML = "<p id='defined_variable_" + curRowIndex + "' >" +document.getElementById('defined_variable_1').value + "</p>";
    oCell2.innerHTML = "=";
    oCell3.innerHTML = "<p id='defined_value_" + curRowIndex + "' >" +document.getElementById('defined_value_1').value + "</p>";
    oCell4.innerHTML = "<input type=button value=\" Delete Variable \" onClick=\"delVarRow()\">";

    

    // Go through each logical predicate row and append to boolean variable options

    var table = document.getElementById('logic_table');



    for (var r = 1, n = table.rows.length; r < n; r++) {

        var boolvar1 = document.getElementById('ops1_'+r);
        var boolvar2 = document.getElementById('ops2_'+r);

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


function delVarRow() {
    document.getElementById("var_table").deleteRow(document.getElementById("var_table").clickedRowIndex);

    var table = document.getElementById('logic_table');

    for (var r = 1, n = table.rows.length; r < n; r++) {
        var boolvar1 = document.getElementById('ops1_'+r);
        var boolvar2 = document.getElementById('ops2_'+r);
        boolvar1.remove(document.getElementById("var_table").clickedRowIndex);
        boolvar2.remove(document.getElementById("var_table").clickedRowIndex);
        
    }
}


// Logical Predicates Table Functions

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
    var bool2Options = `<select type=text name=Boolean2_`+ curRowIndex + `[] id="ops2_` + curRowIndex + `">`;

    bool1Options += `<option value="true">True</option>`;
    bool2Options += `<option value="true">True</option>`;
    bool1Options += `<option value="false">False</option>`;
    bool2Options += `<option value="false">False</option>`;
    for (var r = 2, n = varTable.rows.length; r < n; r++) {
        console.log('r', r);
        console.log(document.getElementById('defined_variable_'+r).innerHTML);
        var curVariable = document.getElementById('defined_variable_'+r).innerHTML;
        var curValue = document.getElementById('defined_value_'+r).innerHTML;
        console.log(curValue);
        bool1Options += `<option value="`+ curValue  + `">` + curVariable + `</option>`;
        bool2Options += `<option value="`+ curValue  + `">` + curVariable + `</option>`;
    }

    bool1Options += `</select>`;
    bool2Options += `</select>`;


    oCell1.innerHTML = bool1Options;

    oCell2.innerHTML = `
        <select type=text name=LogicOp1_` + curRowIndex + `[]> id="ops">                                       
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
        <select type=text name=LogicOp2_` + curRowIndex+ `[]> id="ops">
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
    oCell5.innerHTML = "<input type=button value=\" Delete Predicate \" onClick=\"delPredRow()\">";

}

function delPredRow() {
    document.getElementById("logic_table").deleteRow(document.getElementById("logic_table").clickedRowIndex);
}