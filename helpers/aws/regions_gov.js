// Source: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html

var regions = [
    'us-gov-west-1',
    'us-gov-east-1'
];

module.exports = {
    default: ['us-gov-west-1'],
    all: regions,
    optin: [],
    accessanalyzer: regions,
    acm: regions,
    apigateway: regions,
    athena: ['us-gov-west-1'],
    backup: regions,
    cloudfront: [],
    autoscaling: regions,
    iam: regions,
    route53: [],
    route53domains: [],
    s3: regions,
    s3control: regions,
    cloudtrail: regions,
    cloudwatchlogs: regions,
    cloudformation: regions,
    comprehend: ['us-gov-west-1'],
    configservice: regions,
    dlm: regions,
    dms: regions,
    dax: [],
    devopsguru: regions,
    dynamodb: regions,
    ec2: regions,
    ecr: regions,
    eks: [],
    efs: regions,
    elasticbeanstalk: regions,
    elastictranscoder: [],
    elb: regions,
    elbv2: regions,
    emr: regions,
    es: regions,
    eventbridge: regions,
    kinesis: [],
    kinesisvideo: regions,
    firehose: [],
    glue: regions,
    kms: regions,
    vpc: regions,
    flowlogs: regions,
    rds: regions,
    redshift: regions,
    cloudwatch: regions,
    ecs: regions,
    sagemaker: [],
    secretsmanager: regions,
    ses: [],
    servicequotas: [],
    shield: [],
    sns: regions,
    sqs: regions,
    ssm: regions,
    // SSE via KMS is only supported in some regions
    // even though SQS is supported in all regions.
    sqs_encrypted: regions,
    sts: regions,
    support: [],
    transfer: [],
    lambda: regions,
    elasticache: regions,
    mwaa: regions,
    directconnect: regions,
    directoryservice: [],
    organizations: regions,
    guardduty: ['us-gov-west-1'],
    wafregional: [],
    wafv2: regions,
    waf: regions,
    workspaces: ['us-gov-west-1'],
    xray: [],
    resourcegroupstaggingapi: regions,
    codestar: regions,
    codebuild: regions,
    mq: regions,
    glacier: regions,
    timestreamwrite: regions,
    neptune: regions,
    docdb: regions,
    memorydb: regions,
    kafka: regions,
    kendra: regions,
    proton: regions,
    customerprofiles: regions,
    qldb: regions,
    finspace: regions,
    codepipeline: regions,
    codeartifact: regions,
    auditmanager: regions,
    appflow: regions,
    translate: regions,
    databrew: regions,
    managedblockchain: regions,
    connect: regions,
    apprunner: regions,
    healthlake: regions,
    lookoutequipment: regions,
    iotsitewise: regions,
    location: regions,
    lookoutvision: regions,
    lookoutmetrics: regions,
    forecastservice: regions,
    lexmodelsv2: regions,
    fsx: regions,
    wisdom: regions,
    voiceid: regions,
    appmesh: regions,
    frauddetector: regions
};
