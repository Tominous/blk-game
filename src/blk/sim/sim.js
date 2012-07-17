/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @author benvanik@google.com (Ben Vanik)
 */

goog.provide('blk.sim');

// Extra requires to shut up type warnings
/** @suppress {extraRequire} */
goog.require('gf.sim.ClientSimulator');
/** @suppress {extraRequire} */
goog.require('gf.sim.ServerSimulator');


/**
 * BLK module ID.
 * Used by {@see gf.sim.createTypeId} to create entity/command type IDs.
 * @const
 * @type {number}
 */
blk.sim.BLK_MODULE_ID = 1;