import Orbit from './orbit/main';
import ActionQueue from './orbit/action_queue';
import Document from './orbit/document';
import Evented from './orbit/evented';
import Notifier from './orbit/notifier';
import Requestable from './orbit/requestable';
import Transaction from './orbit/transaction';
import Transformable from './orbit/transformable';
import RequestConnector from './orbit/request_connector';
import TransformConnector from './orbit/transform_connector';
import { assert } from './orbit/lib/assert';
import { arrayToOptions } from './orbit/lib/config';
import { diffs } from './orbit/lib/diffs';
import { eq } from './orbit/lib/eq';
import { PathNotFoundException } from './orbit/lib/exceptions';
import { clone, expose, extend } from './orbit/lib/objects';
import { capitalize } from './orbit/lib/strings';
import { noop, required } from './orbit/lib/stubs';

Orbit.ActionQueue = ActionQueue;
Orbit.Document = Document;
Orbit.Evented = Evented;
Orbit.Notifier = Notifier;
Orbit.Requestable = Requestable;
Orbit.Transaction = Transaction;
Orbit.Transformable = Transformable;
Orbit.RequestConnector = RequestConnector;
Orbit.TransformConnector = TransformConnector;
// lib fns
Orbit.assert = assert;
Orbit.arrayToOptions = arrayToOptions;
Orbit.diffs = diffs;
Orbit.eq = eq;
Orbit.PathNotFoundException = PathNotFoundException;
Orbit.clone = clone;
Orbit.expose = expose;
Orbit.extend = extend;
Orbit.capitalize = capitalize;
Orbit.noop = noop;
Orbit.required = required;

export default Orbit;