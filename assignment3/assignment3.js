
// Define Variables Table Functions

function getVariables() {

    var table = document.getElementById('var_table');
    for (var r = 1, n = table.rows.length; r < n; r++) {
        console.log(document.getElementById('defined_variable_'+r).value);
        console.log(document.getElementById('defined_value_'+r).value);
    }

}

// function addVarRow() {

//     var oRow = document.getElementById("var_table").insertRow(document.getElementById("var_table").rows.length);
//     oRow.onmouseover = function () { document.getElementById("var_table").clickedRowIndex = this.rowIndex; };
//     var oCell1 = oRow.insertCell(0);
//     var oCell2 = oRow.insertCell(1);
//     var oCell3 = oRow.insertCell(2);
//     var oCell4 = oRow.insertCell(3);



//     var curRowIndex = document.getElementById("var_table").rows.length - 1;
//     console.log(curRowIndex)
//     oCell1.innerHTML = "<input type=text id=defined_variable_"+ curRowIndex+ " name=defined_variable_"+ curRowIndex+ "[]>";
//     oCell2.innerHTML = "=";
//     oCell3.innerHTML = "<input type=text id=defined_value_"+ curRowIndex+ " name=defined_value_"+ curRowIndex+ "[]>";
//     oCell4.innerHTML = "<input type=button value=\" Delete Variable \" onClick=\"delVarRow()\">";


// }

function addVarRow() {
    var oRow = document.getElementById("var_table").insertRow(document.getElementById("var_table").rows.length);
    oRow.onmouseover = function () { document.getElementById("var_table").clickedRowIndex = this.rowIndex; };
    var oCell1 = oRow.insertCell(0);
    var oCell2 = oRow.insertCell(1);
    var oCell3 = oRow.insertCell(2);
    var oCell4 = oRow.insertCell(3);

    oCell1.innerHTML = document.getElementById('defined_variable_1').value;
    oCell2.innerHTML = "=";
    oCell3.innerHTML = document.getElementById('defined_value_1').value;
    oCell4.innerHTML = "<input type=button value=\" Delete Predicate \" onClick=\"delVarRow()\">";

    

    // TODO: Go through each logical predicate row and append to boolean variable options

    var table = document.getElementById('logic_table');



    for (var r = 1, n = table.rows.length; r < n; r++) {

        var boolvar1 = document.getElementById('ops1');
        var boolvar2 = document.getElementById('ops2');

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
    document.getElementById("defined_value_1").value = "";




}


function delVarRow() {
    document.getElementById("var_table").deleteRow(document.getElementById("var_table").clickedRowIndex);
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
    oCell1.innerHTML = `
        <select type=text name=Boolean1_"+ curRowIndex+ "[] id="ops">
            <optgroup label="Defined Variables">

            </optgroup>
            
            <optgroup label="Defaults">
                    <option value="true">True</option>
                    <option value="false">False</option>
            </optgroup>
        </select>
    
    `;

    oCell2.innerHTML = `
        <select type=text name=LogicOp2_"+ curRowIndex+ "[]> id="ops">                                       
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

    oCell3.innerHTML = `
        <select type=text name=Boolean2_"+ curRowIndex+ "[] id="ops">
            <optgroup label="Defined Variables">

            </optgroup>
            
            <optgroup label="Defaults">
                    <option value="true">True</option>
                    <option value="false">False</option>
            </optgroup>
        </select>
    `;

    oCell4.innerHTML = `
        <select type=text name=LogicOp2_"+ curRowIndex+ "[]> id="ops">
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


    // TODO: Go through each defined variable row and populate the boolean variable options

    var varTable = document.getElementById('var_table');

    var bool1Options = `<select type=text name=Boolean1_"+ curRowIndex+ "[] id="ops1">`;
    var bool2Options = `<select type=text name=Boolean2_"+ curRowIndex+ "[] id="ops2">`;

    for (var r = 1, n = varTable.rows.length; r < n; r++) {

        var curVariable = document.getElementById('defined_variable_'+r).value;
        var curValue = document.getElementById('defined_value_'+r).value;
        
        bool1Options += `<option value="`+ curValue  + `">` + curVariable + `</option>`;
        bool2Options += `<option value="`+ curValue  + `">` + curVariable + `</option>`;
    }

    oCell1.innerHTML = `
        <select type=text name=Boolean1_"+ curRowIndex+ "[] id="ops">
            <optgroup label="Defined Variables">

            </optgroup>
            
            <optgroup label="Defaults">
                    <option value="true">True</option>
                    <option value="false">False</option>
            </optgroup>
        </select>
    
    `;

    oCell2.innerHTML = `
        <select type=text name=LogicOp2_"+ curRowIndex+ "[]> id="ops">                                       
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

    oCell3.innerHTML = `
        <select type=text name=Boolean2_"+ curRowIndex+ "[] id="ops">
                    <option value="true">True</option>
                    <option value="false">False</option>

        </select>
    `;

    oCell4.innerHTML = `
        <select type=text name=LogicOp2_"+ curRowIndex+ "[]> id="ops">
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




    
    // var logicTable = document.getElementById('logic_table');

    // var varTable = document.getElementById('var_table');

    // var boolvar1 = document.getElementById('ops1');
    // var boolvar2 = document.getElementById('ops2');

    // for (var r = 1, n = varTable.rows.length; r < n; r++) {

    //     var curVariable = document.getElementById('defined_variable_'+r).value;
    //     var curValue = document.getElementById('defined_value_'+r).value;

    //     var newOption1 = document.createElement("option");
    //     newOption1.text = curVariable;
    //     newOption1.value = curValue;

    //     var newOption2 = document.createElement("option");
    //     newOption2.text = curVariable;
    //     newOption2.value = curValue;

        
    //     boolvar1.add(newOption1);
    //     boolvar2.add(newOption2);

        
    // }




    




}

function delPredRow() {
    document.getElementById("logic_table").deleteRow(document.getElementById("logic_table").clickedRowIndex);
}