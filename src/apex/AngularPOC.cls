public class AngularPOC {

  @RemoteAction
  public static List<Contact> getContacts() {
    return [SELECT Id, Name FROM Contact];
  }

  @RemoteAction
  public static Contact getContact(String contactId) {
    return [SELECT Id, Name, Title, Phone, Email FROM Contact WHERE Id =: contactId];
  }
}