class ActivityLog {
  constructor(id, action, entityType, entityId, userId, timestamp, details) {
    this.id = id;
    this.action = action;
    this.entityType = entityType;
    this.entityId = entityId;
    this.userId = userId;
    this.timestamp = timestamp;
    this.details = details || {};
  }
}

module.exports = ActivityLog;
