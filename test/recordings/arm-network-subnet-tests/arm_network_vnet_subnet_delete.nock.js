// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948',
    name: 'CollaberaInteropTest',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'westus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/virtualnetworks/xplatTestVnet1683/subnets/xplatTestSubnet600?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet600\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/virtualNetworks/xplatTestVnet1683/subnets/xplatTestSubnet600\",\r\n  \"etag\": \"W/\\\"874de3f4-cb13-4bff-8813-7e3114b532d8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/networkSecurityGroups/undefined\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"874de3f4-cb13-4bff-8813-7e3114b532d8"',
  'x-ms-request-id': '9fb4d510-601a-4349-a3a6-029475decd20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31947',
  'x-ms-correlation-request-id': '394367a1-68c9-49e2-b941-d5e458d0642b',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091127Z:394367a1-68c9-49e2-b941-d5e458d0642b',
  date: 'Mon, 27 Apr 2015 09:11:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/virtualnetworks/xplatTestVnet1683/subnets/xplatTestSubnet600?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"name\": \"xplatTestSubnet600\",\r\n  \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/virtualNetworks/xplatTestVnet1683/subnets/xplatTestSubnet600\",\r\n  \"etag\": \"W/\\\"874de3f4-cb13-4bff-8813-7e3114b532d8\\\"\",\r\n  \"properties\": {\r\n    \"provisioningState\": \"Succeeded\",\r\n    \"addressPrefix\": \"10.0.1.0/24\",\r\n    \"networkSecurityGroup\": {\r\n      \"id\": \"/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/networkSecurityGroups/undefined\"\r\n    }\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '596',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  etag: 'W/"874de3f4-cb13-4bff-8813-7e3114b532d8"',
  'x-ms-request-id': '9fb4d510-601a-4349-a3a6-029475decd20',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31947',
  'x-ms-correlation-request-id': '394367a1-68c9-49e2-b941-d5e458d0642b',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091127Z:394367a1-68c9-49e2-b941-d5e458d0642b',
  date: 'Mon, 27 Apr 2015 09:11:26 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/virtualnetworks/xplatTestVnet1683/subnets/xplatTestSubnet600?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/cf087d6a-f737-4540-b040-cfe3894aa07e?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'cf087d6a-f737-4540-b040-cfe3894aa07e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cf087d6a-f737-4540-b040-cfe3894aa07e?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': '98785b26-a58d-4fdb-bf91-36bdfb3e4ee0',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091128Z:98785b26-a58d-4fdb-bf91-36bdfb3e4ee0',
  date: 'Mon, 27 Apr 2015 09:11:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/resourceGroups/xplatTestGCreateSubnet8565/providers/Microsoft.Network/virtualnetworks/xplatTestVnet1683/subnets/xplatTestSubnet600?api-version=2015-05-01-preview')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operationResults/cf087d6a-f737-4540-b040-cfe3894aa07e?api-version=2015-05-01-preview',
  'retry-after': '10',
  'x-ms-request-id': 'cf087d6a-f737-4540-b040-cfe3894aa07e',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cf087d6a-f737-4540-b040-cfe3894aa07e?api-version=2015-05-01-preview',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-writes': '1183',
  'x-ms-correlation-request-id': '98785b26-a58d-4fdb-bf91-36bdfb3e4ee0',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091128Z:98785b26-a58d-4fdb-bf91-36bdfb3e4ee0',
  date: 'Mon, 27 Apr 2015 09:11:28 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cf087d6a-f737-4540-b040-cfe3894aa07e?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '48d51985-2e78-4d0e-8a0a-a5748f638049',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31956',
  'x-ms-correlation-request-id': '85b8fa1e-0a0c-4b6d-9d74-203362dd6bce',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091139Z:85b8fa1e-0a0c-4b6d-9d74-203362dd6bce',
  date: 'Mon, 27 Apr 2015 09:11:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/bfb5e0bf-124b-4d0c-9352-7c0a9f4d9948/providers/Microsoft.Network/locations/westus/operations/cf087d6a-f737-4540-b040-cfe3894aa07e?api-version=2015-05-01-preview')
  .reply(200, "{\r\n  \"status\": \"Succeeded\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '29',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '48d51985-2e78-4d0e-8a0a-a5748f638049',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '31956',
  'x-ms-correlation-request-id': '85b8fa1e-0a0c-4b6d-9d74-203362dd6bce',
  'x-ms-routing-request-id': 'EASTASIA:20150427T091139Z:85b8fa1e-0a0c-4b6d-9d74-203362dd6bce',
  date: 'Mon, 27 Apr 2015 09:11:39 GMT',
  connection: 'close' });
 return result; }]];