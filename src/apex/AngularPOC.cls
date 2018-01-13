global class AngularPOC {

  @RemoteAction
  webservice static String getContacts() {
    return JSON.serialize([SELECT Id, Name FROM Contact]);
  }

  @RemoteAction
  webservice static String getContact(String contactId) {
    return JSON.serialize([SELECT Id, Name FROM Contact WHERE Id =: contactId]);
  }
}