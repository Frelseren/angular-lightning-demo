public class AngularPOC {

  @AuraEnabled
  public static List<Contact> getContacts() {
    return [SELECT Id, Name FROM Contact];
  }
}