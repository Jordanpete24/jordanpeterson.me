var _contentNavBarElements;
var _contentClassElements;
//var _contentClass;
var _document;

function populateContentSidebar(contentClassElements, navBarElements, Document) {
	_contentNavBarElements = navBarElements;
	_contentClassElements = contentClassElements;
	_document = Document;
	//_contentClass = contentClass;
	refreshContentSidebar();
}

function refreshContentSidebar(){
	//Find the content in the document, of the relevant class type
	//var content = _document.getElementsByClassName(_contentClass);
	var counter;
	var contentCounter;
	//Remove previous content shortcut links from each of the content navbar elements
	for(counter = 0; counter < _contentNavBarElements.length; counter++)
	{
		removeAllChildElements(_contentNavBarElements[counter]);
	}
	//For each relevant content element in this document, consider if a new content shortcut links is appropriate to make; make it if appropriate
	for(contentCounter = 0; contentCounter < _contentClassElements.length; contentCounter++)
	{
		checkEligibilityOfElement(_contentClassElements[contentCounter]);
				
	}
}

//Source: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
function removeAllChildElements(parent){	
	while(parent.firstChild) {
	parent.removeChild(parent.firstChild);
	}	
}

function checkEligibilityOfElement(element){
	//If this element has attributes, proceed
	if(element.hasAttributes())
	{
		var attributeCount;
		var attributes = element.attributes;
		var hasIdAttribute = false; //Used to track boolean of if this element has an id attribute
		var idAttributeValue; //Used to track string value of the element's id attribute
		var hasHiddenAttribute = false; //Used to track boolean of if this element has an id attribute
		
		//Try to determine if this element has an id attribute by cycling through each of its attributes
		for(attributeCount = 0; attributeCount < attributes.length; attributeCount++)
		{
			//If this attribute has the key 'id', this it is the element's id attribute, and is worthy of having a new shortcut link created for it
			if(attributes[attributeCount].name === "id")
			{
				hasIdAttribute = true;
				idAttributeValue = attributes[attributeCount].value;
			}
			//If this attribute has the key 'hidden' 
			else if (attributes[attributeCount].name === "hidden")
			{
				hasHiddenAttribute = true;
			}
		}

		//Pass the element's id to be used to create a new shortcut link to the element
		if(hasIdAttribute)
		{
			//For each contentNavBarElement, create a shortcut link to the eligible element
			var counter;
			for (counter = 0; counter < _contentNavBarElements.length; counter++)
			{
				createShortcutLinkForElement(idAttributeValue, hasHiddenAttribute, _contentNavBarElements[counter]);
			}
			
		}			
	}

}

//Using the element's id, creates a new 'a' type element; makes it reference the #header of that id, and includes text of that id
function createShortcutLinkForElement(elementID, hiddenStatus, _contentNavBarElement){
	//Source: http://net-informations.com/js/iq/elements.htm
	var newSidebarShortcut = _document.createElement('a');	
    //If hidden (i.e. it is a header category), add a strong/bold style to the text
    if(hiddenStatus)
    {
    	var strongWrapper = createStrongWrapper(elementID);
    	newSidebarShortcut.appendChild(strongWrapper);
    }
    //Unhidden categories should redirect the user to the category's header on the page via href
    else
    {
    	newSidebarShortcut.textContent = elementID;
   		newSidebarShortcut.setAttribute('href', "#"+elementID);
    }
    //Append the new element to the content navbar   
	_contentNavBarElement.appendChild(newSidebarShortcut);

}

//Creates and returns a strong element with the passed textContent.
function createStrongWrapper(_textContent){
	var strongWrapper = _document.createElement("STRONG");
	strongWrapper.textContent = _textContent;
	return strongWrapper;
}
