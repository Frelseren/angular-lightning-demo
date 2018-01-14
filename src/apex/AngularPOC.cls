@RestResource(urlMapping = '/angularpoc')
global class AngularPOC {

  @HttpGet
  global static List<Contact> getContacts() {
    return [SELECT Id, Name FROM Contact];
  }

  @RemoteAction
  webservice static String getContact(String contactId) {
    return JSON.serialize([SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Id =: contactId][0]);
  }
}