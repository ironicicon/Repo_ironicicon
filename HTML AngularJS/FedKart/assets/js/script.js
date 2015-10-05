$(document).ready(function(){
                $('#EventCreateLnk').click(function(){
                    $('#EventCreateDiv').slideToggle('slow');
                });
                $('#CreateTicketLnk').click(function(){
                    $('#CreateTicketDiv').slideToggle('slow');
                    populateDropdown('POffice',0,"Enter 6 digit PINCode",0);
                    populateDropdown('TalukName',0,"Enter 6 digit PINCode",0);
                    populateDropdown('DistrictName',0,"Enter 6 digit PINCode",0);
                });
				$('#eventForm').submit(function(e){
					e.preventDefault();
                    if($("#eventForm").get()[0].checkValidity())
                    {
                        var enteredDate= $('#DateTime').val();
                        var dayNum=enteredDate.split('-')[2];
                        if(dayNum <10)
                        {
                            dayNum=(enteredDate.split('-')[2]).substring(1,2);
                        }
                        var monthNum=enteredDate.split('-')[1];
                        if(monthNum <10)
                        {
                            monthNum=(enteredDate.split('-')[1]).substring(1,2);
                        }
                        var manipulatedDescription= "<div class='day-event' date-month='"+monthNum+"' date-day='"+dayNum+"'><a href='#' class='close fontawesome-remove'></a><h2 class='title'>"+$('#Title').val()+"</h2><p class='date'>"+enteredDate+"</p><p>"+$('#Desc').val()+"</p></div>";
                        //adding class
                        var day=(enteredDate.split('-')[2]%7)-1; //gives number
                        var whichRow=Math.floor(enteredDate.split('-')[2]/7);
                        var ticketNumber="";
                        //addClass event to show a notification to user					
                        $($('.event-calendar')[0].children[whichRow].children[day]).addClass("event");
                        $('#Cal').append(manipulatedDescription);
                    }
					//do ajax insert / post into the DB
					var randomNumber=$.get('https://www.random.org/integers/?num=1&min=1&max=1000000000&col=1&base=10&format=plain&rnd=new')
						.done(function(){
						//to be actually replaced with a webservice which will fetch the ticket for that particular user
							ticketNumber=randomNumber.responseText;
							var JSONObj=[];
							var item={};
							item["TicketID"]=ticketNumber;
							item["date"]=enteredDate;
							item["title"]=$('#Title').val();
							item["description"]=$('#Desc').val();
							item["User"]="user";
							JSONObj.push(item);
							/*$.ajax{(
								url:'http://url.com',
								method:'post',
								data:JSON.
							});*/
							//Done upto Creating JSON Object
							//13 September 2015 -- ticket ID creation
							if(JSONObj!=null)
							{
								/*$('#tktDiv').css('display','block');
								$('#TicketTxt').html(ticketNumber+" is created successfully. Please click <a href='/anotherLink.html'>here</a> to check the status");*/
							}
						});
					});
                $('#Pincode').keyup(function(){
                    if($('#Pincode').val().length==6)
                    {
                        //create Ajax URL
                        $.ajax({
                            url:'https://data.gov.in/api/datastore/resource.json?resource_id=6176ee09-3d56-4a3b-8115-21841576b2f6&api-key=4991124efbb26071f4cb04effcbb1225&filters[pincode]='+$('#Pincode').val()+'&fields=officename,taluk,districtname,statename&sort[pincode]=asc',
                            method:'GET',
                            complete:function(resp){
                                //console.log(resp);
                                var ResponseJSON=JSON.parse(resp.responseText);
                                var PinCodeDetails=ResponseJSON["records"];
                                $('#POffice').empty();
                                $('#TalukName').empty();
                                $('#DistrictName').empty();
                                $.each(PinCodeDetails,function(key,value){
                                    populateDropdown('POffice',value["officename"],value["officename"],0);
                                    populateDropdown('TalukName',value["taluk"],value["taluk"],1);
                                    populateDropdown('DistrictName',value["District"],value["districtname"],1);
                                });
                            },
                            error:function(){
                                alert('please try again');
                            }
                        });
                    }
                });
                $('#CreateTicketForm').submit(function(e){
					e.preventDefault();
                    if($("#CreateTicketForm").get()[0].checkValidity())
                    {
                        var randomNumber=$.get('https://www.random.org/integers/?num=1&min=1&max=1000000000&col=1&base=10&format=plain&rnd=new')
						.done(function(){
						//to be actually replaced with a webservice which will fetch the ticket for that particular user
							ticketNumber=randomNumber.responseText;
							var JSONObj1=[];
							var item={};
							item["TicketID"]=ticketNumber;
							item["title"]=$('#Title').val();
							item["description"]=$('#Desc').val();
							item["User"]="user";
							JSONObj1.push(item);
							/*$.ajax{(
								url:'http://url.com',
								method:'post',
								data:JSON.
							});*/
                            console.log(JSONObj1);
							if(JSONObj1!=null)
							{
								$('#tktDiv').css('display','block');
								$('#TicketTxt').html(ticketNumber+" is created successfully. Please click <a href='/anotherLink.html'>here</a> to check the status");
							}
						});
                    }
					//do ajax insert / post into the DB
					});
			});
            function populateDropdown(targetDropDown,key,value,limit){
                if(limit>0)
                {
                    $('#'+targetDropDown).empty();   
                }
                var newOption = $('<option>');
                newOption.attr('value',key).text(value);
                $('#'+targetDropDown).append(newOption);
            }