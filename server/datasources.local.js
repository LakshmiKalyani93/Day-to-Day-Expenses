'use strict';
const mappings = require('./elasticmappings.json');
const env = process.env.NODE_ENV || 'local';
const elasticConfig = require(`../config/config.${env}.json`).elastic;
module.exports = {
  'exp_ds_user': {
    'name': 'exp_ds_user',
    'index': 'exp_index_user',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingType': 'basedata',
    'mappingProperties': mappings.User,
    'mappings': []
  },
  'exp_ds_income': {
    'name': 'exp_ds_income',
    'index': 'exp_index_income',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingType': 'basedata',
    'mappingProperties': mappings.Income,
    'mappings': []
  },
  'exp_ds_expense': {
    'name': 'exp_ds_expense',
    'index': 'exp_index_expense',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingType': 'basedata',
    'mappingProperties': mappings.Expense,
    'mappings': []
  },
  'exp_ds_category': {
    'name': 'exp_ds_category',
    'index': 'exp_index_category',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingType': 'basedata',
    'mappingProperties': mappings.Category,
    'mappings': []
  },
  'exp_ds_acl': {
    'name': 'exp_ds_acl',
    'index': 'exp_index_acl',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingProperties': mappings.ACL,
    'mappingType': 'basedata',
    'mappings': [],
    'defaultSize': 1000
  },
  'exp_ds_access_token': {
    'name': 'exp_ds_access_token',
    'index': 'exp_index_access_token',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingProperties': mappings.AccessToken,
    'mappingType': 'basedata',
    'mappings': [],
    'defaultSize': 1000
  },
  'exp_ds_role': {
    'name': 'exp_ds_role',
    'index': 'exp_index_role',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingProperties': mappings.Role,
    'mappingType': 'basedata',
    'mappings': [],
    'defaultSize': 1000
  },
  'exp_ds_roleMapping': {
    'name': 'exp_ds_roleMapping',
    'index': 'exp_index_rolemapping',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingProperties': mappings.RoleMapping,
    'mappingType': 'basedata',
    'mappings': [],
    'defaultSize': 1000
  },
  'exp_ds_logmodel': {
    'name': 'exp_ds_logmodel',
    'index': 'exp_index_logmodel',
    'hosts': elasticConfig.hosts,
    'refreshOn': [
      'save',
      'create',
      'updateOrCreate'
    ],
    'requestTimeout': 30000,
    'log': '',
    'apiVersion': '6.0',
    'connector': 'esv6',
    'mappingProperties': mappings.LogModel,
    'mappingType': 'basedata',
    'mappings': [],
    'defaultSize': 1000
  }
};
