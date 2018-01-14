@RestResource(urlMapping = '/angularpoc')
global class AngularPOC {

  @HttpGet
  global static List<Contact> getContacts() {
    RestRequest req = RestContext.request;
    String contactId = req.params.get('contactId');
    
    if (contactId != null) {
      return [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Id =: contactId];
    }
    
    return [SELECT Id, Name FROM Contact];
  }
}