public with sharing class LWCApexPlay {
    
@AuraEnabled(cacheable=true)
public static Map<Integer,String> getMapData(){

    Map<Integer,String> myMap=new Map<Integer,String>();
    myMap.put(1,'Jay');
    myMap.put(2,'Vikas');
    myMap.put(3,'Abhi');
    return myMap;
}
@AuraEnabled(cacheable=true)
public static List<String> getListData(){
    List<String> strs=new List<String>();
    strs.add('Ram');
    strs.add('Shyam');
    strs.add('Ghanshyam');
    return strs;

}

}
