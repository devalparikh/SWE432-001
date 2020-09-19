function addRow() {
    var oRow = document.getElementById("table").insertRow(document.getElementById("table").rows.length);
    oRow.onmouseover = function () { document.getElementById("table").clickedRowIndex = this.rowIndex; };
    var oCell1 = oRow.insertCell(0);
    var oCell2 = oRow.insertCell(1);
    var oCell3 = oRow.insertCell(2);
    var oCell4 = oRow.insertCell(3);
    var oCell5 = oRow.insertCell(4);


    var curRowIndex = document.getElementById("table").rows.length - 1;
    console.log(curRowIndex)
    oCell1.innerHTML = "<input type=text name=Boolean1_"+ curRowIndex+ "[]>";
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
    oCell3.innerHTML = "<input type=text name=Boolean2_"+ curRowIndex+ "[]>";
    oCell4.innerHTML = `
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
    oCell5.innerHTML = "<input type=button value=\" Delete Predicate \" onClick=\"delRow()\">";

}

function delRow() {
    document.getElementById("table").deleteRow(document.getElementById("table").clickedRowIndex);
}