/*
 * Copyright 2013 The Apache Software Foundation.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.wso2.carbon.event.output.adaptor.websocket.local;

import org.wso2.carbon.event.output.adaptor.core.AbstractOutputEventAdaptor;
import org.wso2.carbon.event.output.adaptor.core.OutputEventAdaptorFactory;

/**
 * This class represents the Websocket Local Event Adaptor Factory implementation.
 */
public class WebsocketLocalEventAdaptorFactory implements OutputEventAdaptorFactory {

    @Override
    public AbstractOutputEventAdaptor getEventAdaptor() {
        return WebsocketLocalEventAdaptor.getInstance();
    }
}