// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '4004a9fd-d58e-48dc-aeb2-4a4aec58606f',
    name: 'Free Trial',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '1273adef-00a3-4086-a51a-dbcce1857d36',
    registeredProviders: [],
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_AD_TEST_USER_PRINCIPAL_NAME'] = 'testUserAuto@rbacCliTest.onmicrosoft.com';
  process.env['AZURE_AD_TEST_PASSWORD'] = 'Pa$$w0rd';
  process.env['AZURE_AD_TEST_GROUP_NAME'] = 'testgroupauto';
  process.env['AZURE_ARM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_AD_TEST_SP_DISPLAY_NAME'] = 'mytestapprandomauto';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_a40344a2-794a-4699-af9d-b434c946ec0e\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-14T17:23:57.9968442Z\",\"updatedOn\":\"2015-09-14T17:23:57.9968442Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"64711e2a-f2e9-474b-b854-e51af08ed4c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fe29be29-39e0-4aa5-a27c-0bba29b1e53f',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '23ecf232-1ce4-4223-94a0-ea3d41c7b6d8',
  'x-ms-routing-request-id': 'WESTUS:20150914T172359Z:23ecf232-1ce4-4223-94a0-ea3d41c7b6d8',
  date: 'Mon, 14 Sep 2015 17:23:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview', '*')
  .reply(201, "{\"properties\":{\"roleName\":\"TestRole_a40344a2-794a-4699-af9d-b434c946ec0e\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-14T17:23:57.9968442Z\",\"updatedOn\":\"2015-09-14T17:23:57.9968442Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"64711e2a-f2e9-474b-b854-e51af08ed4c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'fe29be29-39e0-4aa5-a27c-0bba29b1e53f',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1196',
  'x-ms-correlation-request-id': '23ecf232-1ce4-4223-94a0-ea3d41c7b6d8',
  'x-ms-routing-request-id': 'WESTUS:20150914T172359Z:23ecf232-1ce4-4223-94a0-ea3d41c7b6d8',
  date: 'Mon, 14 Sep 2015 17:23:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_a40344a2-794a-4699-af9d-b434c946ec0e\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-14T17:23:57.9968442Z\",\"updatedOn\":\"2015-09-14T17:23:57.9968442Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"64711e2a-f2e9-474b-b854-e51af08ed4c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '024c41f0-7be4-4729-8e69-02c1da73c270',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'fe86733d-5708-4899-bffb-23cbbfd6f647',
  'x-ms-routing-request-id': 'WESTUS:20150914T172359Z:fe86733d-5708-4899-bffb-23cbbfd6f647',
  date: 'Mon, 14 Sep 2015 17:23:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_a40344a2-794a-4699-af9d-b434c946ec0e\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-14T17:23:57.9968442Z\",\"updatedOn\":\"2015-09-14T17:23:57.9968442Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"64711e2a-f2e9-474b-b854-e51af08ed4c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '024c41f0-7be4-4729-8e69-02c1da73c270',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14992',
  'x-ms-correlation-request-id': 'fe86733d-5708-4899-bffb-23cbbfd6f647',
  'x-ms-routing-request-id': 'WESTUS:20150914T172359Z:fe86733d-5708-4899-bffb-23cbbfd6f647',
  date: 'Mon, 14 Sep 2015 17:23:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_a40344a2-794a-4699-af9d-b434c946ec0e\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-14T17:23:57.9968442Z\",\"updatedOn\":\"2015-09-14T17:23:57.9968442Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"64711e2a-f2e9-474b-b854-e51af08ed4c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e69e8420-6cbe-4d94-89b0-cd5c4541f9b7',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'a71e4fb6-d531-40e4-a963-82502d396e3a',
  'x-ms-routing-request-id': 'WESTUS:20150914T172400Z:a71e4fb6-d531-40e4-a963-82502d396e3a',
  date: 'Mon, 14 Sep 2015 17:23:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview')
  .reply(200, "{\"properties\":{\"roleName\":\"TestRole_a40344a2-794a-4699-af9d-b434c946ec0e\",\"type\":\"CustomRole\",\"description\":\"Custom Role Test Desc\",\"scope\":null,\"assignableScopes\":[\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f\"],\"permissions\":[{\"actions\":[\"Microsoft.Authorization/*/read\",\"Microsoft.Support/*\"],\"notActions\":[]}],\"createdOn\":\"2015-09-14T17:23:57.9968442Z\",\"updatedOn\":\"2015-09-14T17:23:57.9968442Z\",\"createdBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\",\"updatedBy\":\"f8d526a0-54eb-4941-ae69-ebf4a334d0f0\"},\"id\":\"/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8\",\"type\":\"Microsoft.Authorization/roleDefinitions\",\"name\":\"64711e2a-f2e9-474b-b854-e51af08ed4c8\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '751',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e69e8420-6cbe-4d94-89b0-cd5c4541f9b7',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_1',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1194',
  'x-ms-correlation-request-id': 'a71e4fb6-d531-40e4-a963-82502d396e3a',
  'x-ms-routing-request-id': 'WESTUS:20150914T172400Z:a71e4fb6-d531-40e4-a963-82502d396e3a',
  date: 'Mon, 14 Sep 2015 17:23:59 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '64711e2a-f2e9-474b-b854-e51af08ed4c8' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ebbe9f9-a209-4f86-81fd-40bf9e7f894d',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '30b5d6b4-c5f5-4d89-ad9a-3c04568ca1c5',
  'x-ms-routing-request-id': 'WESTUS:20150914T172403Z:30b5d6b4-c5f5-4d89-ad9a-3c04568ca1c5',
  date: 'Mon, 14 Sep 2015 17:24:03 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('//subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/64711e2a-f2e9-474b-b854-e51af08ed4c8?api-version=2015-05-01-preview')
  .reply(404, "{\"error\":{\"code\":\"RoleDefinitionDoesNotExist\",\"message\":\"The specified role definition with ID '64711e2a-f2e9-474b-b854-e51af08ed4c8' does not exist.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '152',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '8ebbe9f9-a209-4f86-81fd-40bf9e7f894d',
  'x-ms-gateway-service-instanceid': 'PASFE_IN_2',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'set-cookie': [ 'x-ms-gateway-slice=productiona; path=/' ],
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14987',
  'x-ms-correlation-request-id': '30b5d6b4-c5f5-4d89-ad9a-3c04568ca1c5',
  'x-ms-routing-request-id': 'WESTUS:20150914T172403Z:30b5d6b4-c5f5-4d89-ad9a-3c04568ca1c5',
  date: 'Mon, 14 Sep 2015 17:24:03 GMT',
  connection: 'close' });
 return result; }]];
 exports.uuidsGenerated = function() { return ['a40344a2-794a-4699-af9d-b434c946ec0e','64711e2a-f2e9-474b-b854-e51af08ed4c8'];};