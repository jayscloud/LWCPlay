public class ContactController {
   
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
      return [Select Id, Name, title,email, phone from Contact];
    }
}
