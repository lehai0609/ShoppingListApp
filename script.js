$(function() {
	$("#datepicker").datepicker({
	showOn:"button",
	buttonImage: "calendar.gif",
	buttonImageOnly: true
	});
});

$(document).on("change", "input[type='checkbox']", removeItem);

function checkInput() {
	event.preventDefault();
	var x = document.itemInput.item.value;
	var y = document.itemInput.amount.value;
	if (!x && !y) {
		alert("Re input item");
		return false;
	}
	else {
		addItem();
		return true;
	}
}

function addItem() {
	event.preventDefault();
	//creat div for new item
	var div = document.createElement("div");
	div.setAttribute("class","newItem");

	var input = document.createElement("input");
	input.setAttribute("type","checkbox");
	var userInput = document.itemInput.item.value;
	var itemAmount = document.itemInput.amount.value;
	var p = document.createElement('p'),
	txt = document.createTextNode(userInput+" "+itemAmount);
	
	p.appendChild(txt);
	p.appendChild(input);
	div.appendChild(p);
	$(".shoppingList").append(div);
}

function removeItem() {
	if (this.checked) {
		$(this).parent().addClass("removeItem");
	} else {
		$(this).parent().removeClass("removeItem");
	}
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               