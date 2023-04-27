import { DN, SearchOptions } from "ldapts";
import { basicLDAPSearch } from "../utils/ldapSearch.js";
import { GlobalSearchDN } from "../config/ldapClient.js";

/*
    Search Items
    - UPN
    - sAMAccountName
    - Common Name (cn)
    - Name (name)
    - Surname (sn)
    - displayName
    - distinguishedName
    - memberOf
    - Created/Changed < or > specified date
    - accountExpires before/after date
*/

// Query LDAP server for user with UPN
export async function getUserUPN(userPrincipalName: string) {
    
    const searchDN =  GlobalSearchDN;
    // Search by userPrincipalName
    const searchParams: SearchOptions = {
        scope: 'sub',
        filter: `(userPrincipalName=${userPrincipalName})`,
    }
    
    // Perform search within DN tree position with search parameters
    const response = await basicLDAPSearch(searchDN, searchParams);

    // Return single object (because UPN is unique)
    return response;
}

// Query for user with sAMAccountName
export async function getUsersAMAccountName(sAMAccountName: string) {

    const searchDN = GlobalSearchDN;
    // Search by userPrincipalName
    const searchParams: SearchOptions = {
        scope: 'sub',
        filter: `(sAMAccountName=${sAMAccountName})`,
    }

    // Perform search within DN tree position with search parameters
    const response = await basicLDAPSearch(searchDN, searchParams);

    // Return single object (because sAMAccountName is unique)
    return response;
}