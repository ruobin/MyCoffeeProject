using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Toast.Example.RNToastExample
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNToastExampleModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNToastExampleModule"/>.
        /// </summary>
        internal RNToastExampleModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNToastExample";
            }
        }
    }
}
