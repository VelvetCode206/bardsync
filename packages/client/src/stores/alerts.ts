import { defineStore } from 'pinia'
import { ALERT_DELAY_MS, STORE_ID_ALERTS } from '~/utils/constants'

export interface Alert {
  id: number
  type: 'success' | 'warning' | 'error'
  message: string
}

const alertTimers = new Map<number, ReturnType<typeof setTimeout>>()

export const useAlertsStore = defineStore(STORE_ID_ALERTS, () => {
  const alerts = ref<Alert[]>([])

  function addAlert({ type, message }: Pick<Alert, 'type' | 'message'>) {
    const id = Date.now()

    alerts.value.unshift({
      id,
      type,
      message,
    })

    alertTimers.set(id, setTimeout(() => {
      removeAlert(id)
    }, ALERT_DELAY_MS))
  }

  function removeAlert(id: number) {
    const alertIndex = alerts.value.findIndex(alert => alert.id === id)
    if (alertIndex >= 0) {
      const timer = alertTimers.get(id)
      if (timer) {
        clearTimeout(timer)
        alertTimers.delete(id)
      }
      alerts.value.splice(alertIndex, 1)
    }
  }

  return {
    alerts,
    addAlert,
    removeAlert,
  }
})
