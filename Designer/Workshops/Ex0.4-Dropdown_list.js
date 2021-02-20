// In the initialization script, populate the Dimension values to widget.

var dropdown_Country = Table_1.getDataSource().getMembers("Country") ;

for (var i=0; i < dropdown_Country.length; i++)
	{
	  Dropdown_1.addItem(dropdown_Country[i].id) ;
	}
;

//////

// On Click Event for the Dropdown box

var selecteval = Dropdown_1.getSelectedKey();

Table_1.getDataSource().setDimensionFilter("Country", selecteval) ;

